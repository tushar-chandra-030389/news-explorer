import express from "express";
import { json, urlencoded } from "body-parser";
import morgan from "morgan";
import cors from "cors";
import config from "@/config";
import * as db from "@/utils/db";
import { signin, signup, protect } from "@/utils/auth";
import userRouter from "@/resources/user/route";
import newsRouter from "@/resources/news/route";

export const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));

app.disable("x-powered-by");

app.post("/signin", signin);
app.post("/signup", signup);

app.use("/api", protect);
app.use("/api/user", userRouter);
app.use("/api/news", newsRouter);

const start = async () => {
  try {
    db.connect();
    app.listen(config.port, () => {
      console.log(`REST API on http://localhost:${config.port}`);
    });
  } catch (e) {
    console.error(e);
  }
};

export default start;
