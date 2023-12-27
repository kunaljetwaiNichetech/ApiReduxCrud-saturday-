import React from "react";
import { useState, useEffect } from "react";
import { ftchdata } from "../apicalling/Callingappp";
import { useDispatch } from "react-redux";
import Disp from "../Display/Disp";

export default function AllMain() {
  const dispatch = useDispatch();
  const [isrendered, setisrendered] = useState(false);

  useEffect(() => {
    if (isrendered) {
      dispatch(ftchdata());
    }
    dispatch(ftchdata());
  }, [dispatch, isrendered]);

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
      {isrendered && <Disp />}
      {/* <Disp /> */}
    </div>
  );
}
