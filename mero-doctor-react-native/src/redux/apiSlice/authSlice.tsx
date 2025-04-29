import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { saveLocalData } from '../../utils/localStorageOperations';
 
interface AuthState {
  userType: any;
  token: string | null;
  isAuthenticated: boolean;
};
 
const initialState: AuthState = {
  userType: null,
  token: null,
  isAuthenticated: false,
};
 
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logins(state, action: PayloadAction<{ userType: any; token: string }>) {
      console.log('Data in auth slice====>',action.payload)
      state.userType = action.payload.userType;
      state.token = action.payload.token;
      state.isAuthenticated = true;

      if(action.payload){
        saveLocalData('userInfo',{
          userType:state.userType,
          userToken:state.token,
          isAuthenticated:state.isAuthenticated
        })
      }
    },
    logout(state) {
      state.userType = null;
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});
 
export const { logins, logout } = authSlice.actions;
export default authSlice.reducer;