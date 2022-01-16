import { Request, Response } from "express";

export const me = (req: Request, res: Response) => {
  res.status(200).json({ data: req.user });
};
