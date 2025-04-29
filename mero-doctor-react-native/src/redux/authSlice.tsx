import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { apiSlice } from './authApis';

interface AuthState {
  user: any | null;
  token: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{user: any; token: string}>,
    ) => {
      const {user, token} = action.payload;
      state.user = user;
      state.token = token;
      state.isAuthenticated = true;
    },
    logout: state => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
  },
  // You can also handle the login success/failure directly here
  extraReducers: builder => {
    builder.addMatcher(
      apiSlice.endpoints.login.matchFulfilled,
      (state, {payload}) => {
        state.token = payload.data.token,
        // state.data = payload.user;
        state.isAuthenticated = true;
      },
    );
  },
});

export const {setCredentials, logout} = authSlice.actions;

export default authSlice.reducer;

// Selector to get authentication status
export const selectIsAuthenticated = (state: {auth: AuthState}) =>
  state.auth.isAuthenticated;

// Selector to get current use
export const selectCurrentUser = (state: {auth: AuthState}) => state.auth.user;
