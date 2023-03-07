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
  // console.log(data);
  return data;
});

/* eslint-disable no-param-reassign */

const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {
    initRocketsData(state, action) {
      state.rockets = action.payload;
    },
    reserveRocket: (state, action) => {
      console.log(state);
      const reserveRocketID = action.payload;
      const reservedRocketArr = [];
      state.map((rocket) => {
        console.log(rocket);
        if (rocket.id === reserveRocketID) {
          reservedRocketArr.push({
            ...rocket,
            reserved: true,
          });
        } else {
          reservedRocketArr.push(rocket);
        }
        return reservedRocketArr;
      });
      return { ...state, data: reservedRocketArr };
    },
    unreserveRocket: (state, action) => {
      const reserveRocketID = action.payload;
      const reservedRocketArr = [];
      state.rockets.map((rocket) => {
        if (rocket.id === reserveRocketID) {
          reservedRocketArr.push({
            ...rocket,
            reserved: false,
          });
        } else {
          reservedRocketArr.push(rocket);
        }
        return reservedRocketArr;
      });
      return { ...state, data: reservedRocketArr };
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
        console.log(state.rockets);
      })
      .addCase(fetchRockets.rejected, (state) => {
        state.loading = false;
        state.error = '';
      });
  },
});

/* eslint-disable no-param-reassign */

export default rocketSlice.reducer;

export const { reserveRocket, unreserveRocket, initRocketsData } = rocketSlice.actions;
