import { createAsyncThunk } from "@reduxjs/toolkit";
const ftchdata = createAsyncThunk("fetchingdata", async () => {
  const response = await fetch("https://reqres.in/api/users?page=1");
  return response.json();
});

export { ftchdata };
