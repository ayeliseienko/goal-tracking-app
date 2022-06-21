import { configureStore } from '@reduxjs/toolkit';

import goalsSlice from './goals/goalsSlice';

export const store = configureStore({
  reducer: {
    goals: goalsSlice,
  },
});
