import { Router } from "express";
import { fetchNews } from "./controller";

const router = Router();

router.get("/", fetchNews);

export default router;
