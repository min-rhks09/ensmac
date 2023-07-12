import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    walletAddress: undefined,
  },
  reducers: {
    setWalletAddress: (state, action) => {
      state.walletAddress = action.payload;
      window.sessionStorage.setItem(
        'walletAddress',
        action.payload,
      );
    },
    clearWalletAddress: (state) => {
      window.sessionStorage.clear();
      state.walletAddress = undefined;
    },
  },
  extraReducers: {
  
  },
});

export const { setWalletAddress, clearWalletAddress } = authSlice.actions;

export default authSlice.reducer;
