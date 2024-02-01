import React from "react";
import { useState, useEffect } from "react";
import { ftchdata } from "../apicalling/Callingappp";
import { useDispatch, useSelector } from "react-redux";
import Disp from "../Display/Disp";
import Pagii from "../Pagination/Pagii";
import { Loader } from "../Loader/LOaderr";

export default function AllMain() {
  const dispatch = useDispatch();
  const [isrendered, setisrendered] = useState(false);
  ///pagination trying
  const [postPerpage, setpostPerpage] = useState(5);
  const [currentpage, setcurrentpage] = useState(1);

  const showingadta = useSelector((state) => {
    return state.Show.data;
  });

  console.log("this is showingdata", showingadta);
  useEffect(() => {
    if (isrendered) {
      dispatch(ftchdata());
    }
    dispatch(ftchdata());
  }, [dispatch, isrendered]);
  /////////////////////
  const lastPage = currentpage * postPerpage;
  const firstPage = lastPage - postPerpage;
  const post = showingadta.slice(firstPage, lastPage);
  console.log("this is post called sliced", post);

  return (
    <div>

      <h1>hii this is mainn</h1>
      {/* <button onClick={(e) => dispatch(ftchdata())}>Set data</button> */}
      <button
        type="button"
        onClick={() => {
          setisrendered(true);
          dispatch(ftchdata());
        }}
      >
        click this to show component
      </button>
     
      {isrendered  && <Disp post={post}   /> }

      <Pagii
        showingadta={showingadta.length}
        postPerpage={postPerpage}
        setcurrentpage={setcurrentpage}
      />
      {/* <Disp /> */}
    </div>
  );
}
