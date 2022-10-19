import { createSlice } from '@reduxjs/toolkit';

const initialUserState = {
  email: '',
  length: '',
};

const userSlice = createSlice({
  name: 'userdata',
  initialState: initialUserState,
  reducers: {
    addUserData(state, action) {
      state.email = action.payload.email;
      state.length = action.payload.length;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
