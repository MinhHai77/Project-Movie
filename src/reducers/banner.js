import movieAPI from "../Services/movieAPI";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  bannerImage: [],
  trailer: [
    "https://youtu.be/uqJ9u7GSaYM",
    "https://youtu.be/kBY2k3G6LsM",
    "https://youtu.be/_rUC3-pNLyc",
  ],
};

export const getMovieBanner = createAsyncThunk(
  "bannerImage/getMovieBanner",
  async () => {
    try {
      const data = await movieAPI.getMovieBanner();
      return data;
    } catch (error) {
      throw error.data;
    }
  }
);
export const getTrailerBanner = createAsyncThunk(
  "bannerVideo/gettrailerBanner",
  async () => {
    try {
      const data = await movieAPI.getMovieDetail(1283);
      console.log(data);
      return data;
    } catch (error) {
      throw error.data;
    }
  }
);
const bannerSlice = createSlice({
  name: "banner",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [getMovieBanner.fulfilled]: (state, { payload }) => {
      const data = payload.map((item, index) => {
        return { ...item, trailer: state.trailer[index] };
      });
      state.bannerImage = data;
      console.log(state.bannerImage);
    },
  },
});

export default bannerSlice.reducer;
