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
  //   console.log(data);
  return data;
});

/* eslint-disable no-param-reassign */

const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    initMissionData(state, action) {
      state.missions = action.payload;
    },
    joinMission: (state, action) => {
      const missionID = action.payload;
      const joinMissionArr = [];
      state.missions.map((mission) => {
        if (mission.id === missionID) {
          joinMissionArr.push({
            ...mission,
            reserved: true,
          });
        } else {
          joinMissionArr.push(mission);
        }
        return joinMissionArr;
      });
      return { ...state, data: joinMissionArr };
    },
    leaveMission: (state, action) => {
      const missionID = action.payload;
      const leaveMissionArr = [];
      state.missions.map((mission) => {
        if (mission.id === missionID) {
          leaveMissionArr.push({
            ...mission,
            reserved: false,
          });
        } else {
          leaveMissionArr.push(mission);
        }
        return leaveMissionArr;
      });
      return { ...state, data: leaveMissionArr };
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
