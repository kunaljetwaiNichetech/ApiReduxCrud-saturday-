import React, { useState } from "react";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const delhdata = createAsyncThunk("adddata", async () => {
  const response = await axios.post(`https://reqres.in/api/users`, {
    email: "emmanam.wong@reqres.in",
    first_name: "kala",
    last_name: "right",
    avatar: "https://reqres.in/img/faces/3-image.jpg",
  });
  return response.json();
});


export default function AdddData() {
  const [formdata, setFormdata] = useState({
    email: "",
    first_name: "",
    last_name: "",
    avatar: "",
  });
  const handelChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };
  const handelFormsubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
    return (
      <din>
        <div>
          Add
          <form onSubmit={handelFormsubmit}>
            <div>
              <label>Email</label>
              <input
                type="text"
                name="email"
                value={formdata.email}
                onChange={handelChange}
              ></input>
            </div>
            <div>
              <label>first_name</label>
              <input
                type="text"
                name="first_name"
                value={formdata.first_name}
                onChange={handelChange}
              ></input>
            </div>
            <div>
              <label>last_name</label>
              <input
                type="text"
                name="last_name"
                value={formdata.last_name}
                onChange={handelChange}
                ></input>
            </div>
            <div>
              <label>avatar</label>
              <input
                type="text"
                name="avatar"
                value={formdata.avatar}
                onChange={handelChange}
                ></input>
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </din>
    );
};
}

export { delhdata };