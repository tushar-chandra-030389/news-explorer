import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

import config from "@/config";
import { User } from "@/resources/user/model";

export const newToken = (user: JwtPayload): string => {
  return jwt.sign({ id: user.id }, config.secrets.jwt, {
    expiresIn: config.secrets.jwtExp,
  });
};

export const verifyToken = (token: string): Promise<JwtPayload> =>
  new Promise((resolve, reject) => {
    jwt.verify(token, config.secrets.jwt, (err, payload) => {
      if (err) return reject(err);
      resolve(payload);
    });
  });

export const signup = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).send({ message: "Email and password required" });
    return;
  }

  const existingUser = await User.findOne({ email: email }).exec();

  if (existingUser) {
    res.status(200).send({ message: "Email exists" });
    return;
  }

  try {
    const user = await User.create({ email, password });
    const token = newToken(user);
    res.status(201).send({ token });
    return;
  } catch {
    res.status(400).end();
    return;
  }
};

export const signin = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).send({ message: "Email and password required" });
    return;
  }

  const user = await User.findOne({ email: email }).exec();

  if (!user) {
    res.status(401).send({ message: "User not found" });
    return;
  }

  try {
    const match = await user.checkPassword(password);
    if (!match) {
      res.status(401).send({ message: "wrong password" });
      return;
    }
    const token = newToken(user);
    res.status(201).send({ token });
    return;
  } catch (e) {
    res.status(400).send({ message: "Unable to authorize" });
    return;
  }
};

export const protect = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  if (!req.headers.authorization) {
    res.status(401).end();
    return;
  }

  const token = req.headers.authorization.split(" ")[1];

  if (!token) {
    res.status(401).end();
    return;
  }

  try {
    const payload = await verifyToken(token);
    const user = await User.findById(payload.id)
      .select("-password")
      .lean()
      .exec();
    req.user = user;
    next();
  } catch (e) {
    res.status(401).end();
    return;
  }
};
