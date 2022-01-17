import type { RootState } from "state/store";

const getNews = (state: RootState) => state.news;

export const getNewsData = (state: RootState) => getNews(state).data;

export const getNewsStatus = (state: RootState) => getNews(state).status;
