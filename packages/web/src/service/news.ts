import axios from "axios";

import CONFIG from "config";

export type FetchNewsPayload = {
  searchText: string;
  page: number;
  pageSize: number;
  startDate: string;
  endDate: string;
};

export async function fetchNews(params: FetchNewsPayload, jwt: string) {
  const result = await axios.get(`${CONFIG.API_URL}/api/news`, {
    params,
    headers: { Authorization: `Bearer ${jwt}` },
  });
  return result;
}
