import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: { _id: "", userName: "", email: "", avatar: "" },
  isAuthenticated: false, // New field to track login status
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
      state.isAuthenticated = true; // Mark as logged in
    },
    loginUser: (state, action) => {
      state.user = {
        _id: action.payload._id,
        userName: action.payload.userName,
        email: action.payload.email,
        avatar: action.payload.avatar || "", // Avatar is optional
      };
      state.isAuthenticated = true; // Mark as logged in
    },
    logout: (state) => {
      // Reset the user and authentication state on logout
      state.user = { _id: "", userName: "", email: "", avatar: "" };
      state.isAuthenticated = false;
    },
  },
});

// Export the actions for use in components
export const { registerUser, loginUser, logout } = userSlice.actions;

export default userSlice.reducer;
