import { configureStore } from '@reduxjs/toolkit';

import goalsSlice from './goals/goalsSlice';
import userSlice from './user/userSlice';

export const store = configureStore({
  reducer: {
    goals: goalsSlice,
    user: userSlice,
  },
});
