import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// import { ListSlice } from "../Sclice/ListSclice";
import { Link, useNavigate } from "react-router-dom";
import { Deletedata } from "../apicalling/Adding";
import { editData } from "../apicalling/Edit";
import { Loader } from "../Loader/LOaderr";
import { useEffect } from "react";

export default function Disp({ post }) {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [load,setload]=useState(true)

  const showingadta = useSelector((state) => {
    // console.log("this si showing data mamamammaamamaamma",state.Show)
    return state.Show.data;
  });
  //  console.log("this si showing data mamamammaamamaamma", state.Show);
  const showingadtaa = useSelector((state) => {
      return state.Show
    });
    useEffect(()=>{
    // setload(showingadtaa.isLoading)
      setload(showingadtaa.isLoading);
         console.log(
           "this si showing data mamamammaamamaamma",
           showingadtaa.isLoading
         );
    },[showingadta])
   

     console.log("this is showingdata", showingadta);

  // useEffect(() => {
  //   console.log("rerender");
  //   dispatch(ftchdata());
  // }, [dispatch]);
  const handeldelete = (e) => {
    setload(true)
    
  
      dispatch(Deletedata(e));
      history("/display");
      console.log("this is eeeeee", e);

     };

  if (showingadta.isLoading) {
    return (
      <div>
        <h1>Loading.......</h1>
        {<Loader/>}
      </div>
    );
  }
  // if (showingadta.iserror) {
  //   return (
  //     <div>
  //       <h1>Error.......</h1>
  //     </div>
  //   );
  // }
  // const rendering = post.flat().map((item, i) => {
  const rendering = showingadta.flat().map((item, i) => {
    return (
      <div>
        {load ? (
          <Loader />
        ) : (
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
                    <button onClick={() => dispatch(editData(item))}>
                      Edit
                    </button>
                    &nbsp;
                    <button onClick={() => handeldelete(item)}>Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
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
