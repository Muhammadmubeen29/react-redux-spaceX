import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from '../features/rocketsSlice';
import missionsReducer from '../features/missionsSlice';

export const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsReducer,
  },
});
