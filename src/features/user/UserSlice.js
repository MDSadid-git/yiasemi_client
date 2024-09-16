import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: { _id: "", userName: "", email: "", avatar: "" },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.user = {
        _id: action.payload._id,
        userName: action.payload.userName,
        email: action.payload.email,
        avatar: action.payload.avatar || "", // Avatar is optional
      };
    },
    loginUser: (state, action) => {
      state.user = {
        _id: action.payload._id,
        userName: action.payload.userName,
        email: action.payload.email,
        avatar: action.payload.avatar || "", // Avatar is optional
      };
    },
    logout: (state) => {
      // Reset the user and authentication state on logout
      state.user = { _id: "", userName: "", email: "", avatar: "" };
    },
  },
});

// Export the actions for use in components
export const { registerUser, loginUser, logout } = userSlice.actions;

export default userSlice.reducer;
