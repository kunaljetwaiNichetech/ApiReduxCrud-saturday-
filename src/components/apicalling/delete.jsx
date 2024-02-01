import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";
import { ftchdata } from "./Callingappp";

const delhdata = createAsyncThunk("adddata", async (props) => {
  let webApiUrl = "https://crudapi.co.uk/api/v1/kunal";
  let tokenStr = "4SUIx3DCqQZIEQdFbwU72xZJmB78cfb8R0OQ0a7XfTKIdUDGYw";
  // axios.post(webApiUrl, { headers: { Authorization: `Bearer ${tokenStr}` }}

  const response = await axios.post(
    webApiUrl,
    //...data

    [
      {
        name: props.first_name,
        lastname: props.last_name,
        email: props.email,
      },
    ],
    {
      headers: {
        Authorization: `Bearer ${tokenStr}`,
      },
    }

    // {
    //   // email: "emmanam.wong@reqres.in",
    //   // first_name: "kala",
    //   // last_name: "right",
    //   // avatar: "https://reqres.in/img/faces/3-image.jpg",

    //   // name: props.first_name,
    //   // job: props.last_name,
    //   name: "Sparkle Angel",
    //   age: 2,
    //   colour: "blue",
    // }
  );
  // console.log(props)
  // const statusOfDetelete = response.status;
  console.log(response.status);

  return response.data;
});

// export default function AdddData() {
//   const [formdata, setFormdata] = useState({
//     email: "",
//     first_name: "",
//     last_name: "",
//     avatar: "",
//   });
//   const handelChange = (e) => {
//     const { name, value } = e.target;
//     setFormdata({ ...formdata, [name]: value });
//   };
//   const handelFormsubmit = (e) => {
//     e.preventDefault();
//     console.log(formdata);
//     return (
//       <din>
//         <div>
//           Add
//           <form onSubmit={handelFormsubmit}>
//             <div>
//               <label>Email</label>
//               <input
//                 type="text"
//                 name="email"
//                 value={formdata.email}
//                 onChange={handelChange}
//               ></input>
//             </div>
//             <div>
//               <label>first_name</label>
//               <input
//                 type="text"
//                 name="first_name"
//                 value={formdata.first_name}
//                 onChange={handelChange}
//               ></input>
//             </div>
//             <div>
//               <label>last_name</label>
//               <input
//                 type="text"
//                 name="last_name"
//                 value={formdata.last_name}
//                 onChange={handelChange}
//               ></input>
//             </div>
//             <div>
//               <label>avatar</label>
//               <input
//                 type="text"
//                 name="avatar"
//                 value={formdata.avatar}
//                 onChange={handelChange}
//               ></input>
//             </div>
//             <div>
//               <button type="submit">Submit</button>
//             </div>
//           </form>
//         </div>
//       </din>
//     );
//   };
// }

export { delhdata };
