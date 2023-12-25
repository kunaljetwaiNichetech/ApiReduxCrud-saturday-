import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// import { ListSlice } from "../Sclice/ListSclice";
import { Link, useNavigate } from "react-router-dom";
import { Deletedata } from "../apicalling/Adding";
import { ftchdata } from "../apicalling/Callingappp";
export default function Disp() {
  const dispatch = useDispatch();
  const history = useNavigate();
  const showingadta = useSelector((state) => {
    return state.Show.data.items;
  });
  console.log("this is showingdata", showingadta);
  const handeldelete = (e) => {
    dispatch(Deletedata(e));
    ftchdata();
    history("/");
  };
  console.log("this is showing data", showingadta);
  // if (showingadta.isLoading) {
  //   return (
  //     <div>
  //       <h1>Loading.......</h1>
  //     </div>
  //   );
  // }
  // if (showingadta.iserror) {
  //   return (
  //     <div>
  //       <h1>Error.......</h1>
  //     </div>
  //   );
  // }
  const rendering = showingadta.map((item, i) => {
    return (
      <div>
        <div>
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>first_name</th>
                <th>last__name</th>
                <th>email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{i}</td>
                <td>{item.name}</td>
                <td>{item.lastname}</td>
                <td>{item.email}</td>
                <td>
                  <button>Edit</button>&nbsp;
                  <button onClick={() => handeldelete(item)}>Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  });

  // this is for deleting the list item
  // const handeldelete = (item) => {
  //   // ListSlice.actions.
  //   console.log(item.id)
  // };

  return (
    // <div>
    //   <div>
    //     <Link to="/form">
    //       <button>Add post</button>
    //     </Link>
    //     <table>
    //       <thead>
    //         <tr>
    //           <th>id</th>
    //           <th>first_name</th>
    //           <th>last__name</th>
    //           <th>email</th>
    //           <th>Actions</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {showingadta &&
    //           showingadta.map((item, i) => {
    //             return (
    //               <tr>
    //                 <td>{i}</td>
    //                 <td>{item.name}</td>
    //                 <td>{item.lastname}</td>
    //                 <td>{item.email}</td>
    //                 <td>
    //                   <button>Edit</button>&nbsp;
    //                   <button onClick={() => handeldelete(item)}>Delete</button>
    //                 </td>
    //               </tr>
    //             );
    //           })}
    //       </tbody>
    //     </table>
    //   </div>
    // </div>
    <div>
      <Link to="/form">
        <button>Add post</button>
      </Link>
      {rendering}
    </div>
  );
}
