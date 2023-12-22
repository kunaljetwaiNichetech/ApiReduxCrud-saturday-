import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const Deletedata = createAsyncThunk("deletingdata", async () => {
  const response = await axios.delete("https://reqres.in/api/users/2");
  return response.json();
});
export { Deletedata };
