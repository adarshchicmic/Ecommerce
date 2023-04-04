import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    name: '',
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
    addToken: (state, action) => {
      const { token } = action.payload;
      state.user.token = token;
    },
    setName: (state, action) => {
      const { name } = action.payload;
      state.user.name = name;
    },
  },
});

export const { login, logout, addUserData, addToken, setName } =
  userSlice.actions;
export default userSlice;
