import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getMissionURL = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  loading: false,
  missions: [],
  error: '',
};

export const fetchMission = createAsyncThunk('rocket/fetchMission', async () => {
  const { data } = await (axios.get(getMissionURL));
  return data;
});

/* eslint-disable no-param-reassign */

const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    joinMission: (state, { payload }) => {
      const newMission = state.missions.map((mission) => {
        if (mission.mission_id !== payload) { return mission; }
        return { ...mission, reserved: true };
      });
      return {
        ...state,
        missions: newMission,
      };
    },
    leaveMission: (state, { payload }) => {
      const newMission = state.missions.map((mission) => {
        if (mission.mission_id !== payload) { return mission; }
        return { ...mission, reserved: false };
      });
      return {
        ...state,
        missions: newMission,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMission.pending, (state) => {
      state.loading = true;
    })
      .addCase(fetchMission.fulfilled, (state, action) => {
        state.loading = false;
        state.error = '';
        state.missions = action.payload;
      })
      .addCase(fetchMission.rejected, (state) => {
        state.loading = false;
        state.error = '';
      });
  },
});

/* eslint-disable no-param-reassign */

export default missionSlice.reducer;

export const {
  initMissionData, joinMission, leaveMission,
} = missionSlice.actions;
