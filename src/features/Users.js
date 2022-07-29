import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "users",
  initialState: {
    value: [],
  },
  reducers: {
    changeValue: (state, action) => {
      state.value = action.payload;
    },
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },
    updateUser: (state, action) => {
      state.value.map((user) => {
        if (user.id === action.payload.id) {
          user.firstName = action.payload.firstName;
          user.lastName = action.payload.lastName;
          user.age = action.payload.age;
          user.gender = action.payload.gender;
          user.height = action.payload.height;
        }
        return user;
      });
    },
  },
});

export const { changeValue, addUser, deleteUser, updateUser } =
  userSlice.actions;
export default userSlice.reducer;
