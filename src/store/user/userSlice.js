import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  profilePic: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logInUser(state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.profilePic = action.payload.profilePic;
    },
    logOutUser(state) {
      state.name = '';
      state.email = '';
      state.profilePic = '';
    },
  },
});

export default userSlice.reducer;

export const { logInUser, logOutUser } = userSlice.actions;
