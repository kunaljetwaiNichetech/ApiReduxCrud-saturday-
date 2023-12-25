import { createAsyncThunk } from "@reduxjs/toolkit";
const ftchdata = createAsyncThunk("fetchingdata", async () => {
  const response = await fetch("https://crudapi.co.uk/api/v1/kunal", {
    method: "GET",
    // headers :{'Authorization':'4SUIx3DCqQZIEQdFbwU72xZJmB78cfb8R0OQ0a7XfTKIdUDGYw'}})
    headers: {
      Authorization:
        "Bearer 4SUIx3DCqQZIEQdFbwU72xZJmB78cfb8R0OQ0a7XfTKIdUDGYw",
    },
  });
  // console.log(response.js());
  return response.json();
});

export { ftchdata };
// 4SUIx3DCqQZIEQdFbwU72xZJmB78cfb8R0OQ0a7XfTKIdUDGYw
