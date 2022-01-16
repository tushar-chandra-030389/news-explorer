import { Request, Response } from "express";
import { sanitizeNewsParams } from "@/utils/sanitization";
import { fetchNews as fetchNewsService } from "./services";

export const fetchNews = async (req: Request, res: Response): Promise<void> => {
  console.log("fetchNews");
  console.log(req.query);
  const { searchText, page, pageSize, startDate, endDate } = req.query;
  const sanitizedParams = sanitizeNewsParams(
    searchText as string,
    parseInt(page as string),
    parseInt(pageSize as string),
    startDate as string,
    endDate as string
  );

  if (!sanitizedParams) {
    res.status(400).json({ message: "Invalid query params." });
    return;
  }

  const result = await fetchNewsService(sanitizedParams);

  if (!result) {
    res.status(200).json({
      data: {
        articles: [],
      },
    });
  }

  res.status(200).json({ data: result });
};
