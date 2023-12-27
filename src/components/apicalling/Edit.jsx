// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const editData = createAsyncThunk("Editdata", async (props) => {
//   console.log("props of edit", props._uuid);
//   const response = await axios.put(
//     `https://crudapi.co.uk/api/v1/kunal/${props._uuid}`,
//     [
//       {
//         name: "kkkkkk",
//         lastname: "jjjjjjj",
//         email: "kunaljetwani.nichetech@gmail.com",
//       },
//     ],
//     {
//       headers: {
//         Authorization:
//           "Bearer 4SUIx3DCqQZIEQdFbwU72xZJmB78cfb8R0OQ0a7XfTKIdUDGYw",
//       },
//     }
//   );
//   return response.data;
// });

// export { editData };

//////////////////////////////////////////////////////////////////////////////////
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const editData = createAsyncThunk("Editdata", async (props) => {
  console.log("props of edit", props._uuid);
  const data = {
    name: "kkkkkk",
    lastname: "jjjjjjj",
    email: "kunaljetwani.nichetech@gmail.com",
  };
  const response = await axios.put(
    `https://crudapi.co.uk/api/v1/kunal/${props._uuid}`,
    data,
    {
      headers: {
        Authorization:
          "Bearer 4SUIx3DCqQZIEQdFbwU72xZJmB78cfb8R0OQ0a7XfTKIdUDGYw",
      },
    }
  );
  return response.data;
});

export { editData };
