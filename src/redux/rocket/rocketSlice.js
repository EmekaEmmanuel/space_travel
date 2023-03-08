import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getRocketsURL = 'https://api.spacexdata.com/v4/rockets';

const initialState = {
  loading: false,
  rockets: [],
  error: '',
};

export const fetchRockets = createAsyncThunk('rocket/fetchRockets', async () => {
  const { data } = await (axios.get(getRocketsURL));
  return data;
});

/* eslint-disable no-param-reassign */

const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {
    bookRocket: (state, { payload }) => {
      const newRockets = state.rockets.map((rocket) => {
        if (rocket.id !== payload) { return rocket; }
        return { ...rocket, reserved: true };
      });
      return {
        ...state,
        rockets: newRockets,
      };
    },
    unreserveRocket: (state, { payload }) => {
      const newRockets = state.rockets.map((rocket) => {
        if (rocket.id !== payload) { return rocket; }
        return { ...rocket, reserved: false };
      });
      return {
        ...state,
        rockets: newRockets,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.pending, (state) => {
      state.loading = true;
    })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.loading = false;
        state.error = '';
        state.rockets = action.payload;
      })
      .addCase(fetchRockets.rejected, (state) => {
        state.loading = false;
        state.error = '';
      });
  },
});

/* eslint-disable no-param-reassign */
/// /////////////////////////////////////////
export const selectAllrocket = (state) => state.rocket.rockets;
/// /////////////////////////////////////////

export default rocketSlice.reducer;

export const { bookRocket, unreserveRocket } = rocketSlice.actions;
