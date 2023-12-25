import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const Deletedata = createAsyncThunk("deletingdata", async (props) => {
  console.log(props);
  console.log(`https://crudapi.co.uk/api/v1/kunal/${props._uuid}`);
  const response = await axios.delete(
    `https://crudapi.co.uk/api/v1/kunal/${props._uuid}`,
    {
      headers: {
        Authorization:
          "Bearer 4SUIx3DCqQZIEQdFbwU72xZJmB78cfb8R0OQ0a7XfTKIdUDGYw",
      },
    }
  );
  return response.json();
});
export { Deletedata };
