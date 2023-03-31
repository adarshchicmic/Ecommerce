import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    number: '9984703591',
    token: '',
  },
  loggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: state => {
      state.loggedIn = true;
    },
    logout: state => {
      state.loggedIn = false;
    },
    addUserData: (state, action) => {
      const { number, token } = action.payload;
      state.user.number = number;
      state.user.token = token;
    },
  },
});

export const { login, logout, addUserData } = userSlice.actions;
export default userSlice;
