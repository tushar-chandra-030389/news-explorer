import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchNews, type FetchNewsPayload } from "service/news";
import type { ThunkApi } from "state/types";
import { getJwt } from "state/selectors/app";

import { STATUS } from "state/constants";

type NewsSlice = {
  data: any;
  status: STATUS;
};

const initialState: NewsSlice = {
  data: null,
  status: STATUS.PENDING,
};

export const triggerFetchNews = createAsyncThunk<
  boolean,
  FetchNewsPayload,
  ThunkApi
>("news/fetch", async (payload, thunkAPI) => {
  const { dispatch, getState } = thunkAPI;
  const state = getState();
  const jwt = getJwt(state) as string;
  try {
    const result = await fetchNews(payload, jwt);
    if (result?.data?.data?.articles) {
      dispatch(setData(result.data.data.articles));

      return true;
    }

    return false;
  } catch {
    return false;
  }
});

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setData: (state: NewsSlice, action: PayloadAction<NewsSlice["data"]>) => {
      state.data = action.payload;
      state.status = STATUS.LOADED;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(triggerFetchNews.pending, (state: NewsSlice) => {
      state.status = STATUS.LOADING;
    });
  },
});

export const { setData } = newsSlice.actions;

export default newsSlice.reducer;
