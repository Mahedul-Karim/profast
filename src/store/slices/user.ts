import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoading: true,
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    clearLoading(state) {
      state.isLoading = false;
    },
    clearUser(state) {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, clearLoading, clearUser } = userSlice.actions;
export default userSlice.reducer;
