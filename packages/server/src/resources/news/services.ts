import axios from "axios";
import config from "@/config";

export const fetchNews = async ({
  searchText,
  page,
  pageSize,
  startDate,
  endDate,
}: {
  searchText: string;
  page: number;
  pageSize: number;
  startDate: string;
  endDate: string;
}) => {
  const url = config.newsApiUrl;
  const apiKey = config.secrets.newsApiKey;

  const params = {
    params: {
      q: searchText,
      from: startDate,
      to: endDate,
      pageSize,
      page,
      apiKey,
    },
  };
  try {
    const result = await axios.get(url, params);
    const {
      data: { articles, totalResults },
    } = result;
    return {
      articles,
      totalResults,
    };
  } catch (e) {
    return false;
  }
};
