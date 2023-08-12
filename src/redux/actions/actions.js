// import * as actions from "./actionTypes";

// export const setUser = (payload) => {
//   return {
//     type: actions.SET_USER,
//     user: payload,
//   };
// };

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "currentUser",
  initialState: { currentUser: null },
  reducers: {
    setUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
