import React, { useState } from "react";
import { delhdata } from "../apicalling/delete";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Form() {
    const history =useNavigate()
    const dispatch = useDispatch();
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
    dispatch(delhdata());
    history("/")
  };
  return (
    <div>
      <h1>this is form components</h1>{" "}
      <div>
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
      </div>
    </div>
  );
}
