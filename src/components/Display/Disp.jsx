import React from "react";
import { useSelector, useDispatch } from "react-redux";

// import { ListSlice } from "../Sclice/ListSclice";
import { Link } from "react-router-dom";
import { Deletedata } from "../apicalling/Adding";
export default function Disp() {
  const dispatch = useDispatch();

  const showingadta = useSelector((state) => {
    return state.Show.data.data;
  });
  console.log(showingadta);
  if (showingadta.isLoading) {
    return (
      <div>
        <h1>Loading.......</h1>
      </div>
    );
  }
  console.log("this is showingdata", showingadta.data);
  // this is for deleting the list item
  // const handeldelete = (item) => {
  //   // ListSlice.actions.
  //   console.log(item.id)
  // };

  return (
    <div>
      <div>
        <Link to="/form">
          <button>Add post</button>
        </Link>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>first_name</th>
              <th>avatar</th>
              <th>email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {showingadta &&
              showingadta.map((item) => {
                return (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.first_name}</td>
                    <td>
                      <img src={item.avatar} />{" "}
                    </td>
                    <td>{item.email}</td>
                    <td>
                      <button>Edit</button>&nbsp;
                      <button onClick={(e) => dispatch(Deletedata(item.id))}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
