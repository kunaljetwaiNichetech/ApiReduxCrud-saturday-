import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";
import { ftchdata } from "./Callingappp";
const Deletedata = createAsyncThunk("deletingdata", async (props) => {
  console.log(props);
  // console.log(`https://crudapi.co.uk/api/v1/kunal/${props}`);
  const response = await axios.delete(
    `https://crudapi.co.uk/api/v1/kunal/${props._uuid}`,
    {
      headers: {
        Authorization:
          "Bearer 4SUIx3DCqQZIEQdFbwU72xZJmB78cfb8R0OQ0a7XfTKIdUDGYw",
      },
    }
  );
  const demo = response.status;
  if (demo === 200) {
    // useDispatch(ftchdata());
    console.log("exicuted");
  }
  console.log("this is status of post", response.status);

    
    return response.data;
});
export { Deletedata };
