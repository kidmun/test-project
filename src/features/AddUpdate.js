import { createSlice } from "@reduxjs/toolkit";

export const addSlice = createSlice({
  name: "add",
  initialState: { value: { addUser: true, userId: null } },
  reducers: {
    changeAddUser: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeAddUser } = addSlice.actions;
export default addSlice.reducer;
