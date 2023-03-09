import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import rocketReducer from './rocket/rocketSlice';
import missionReducer from './mission/missionSlice';

const logger = createLogger();

const store = configureStore({
  reducer: {
    rocket: rocketReducer,
    mission: missionReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
