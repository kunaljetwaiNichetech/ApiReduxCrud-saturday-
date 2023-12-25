import React from "react";
import { useState, useEffect } from "react";
import { ftchdata } from "../apicalling/Callingappp";
import { useSelector, useDispatch } from "react-redux";
import Disp from "../Display/Disp";

export default function AllMain() {
  const dispatch = useDispatch();
  const [isrendered, setisrendered] = useState(false);
  useEffect(() => {
    if (isrendered == true) {
      dispatch(ftchdata);
    }
    dispatch(ftchdata());
  }, [dispatch]);

  return (
    <div>
      <h1>hii this is mainn</h1>
      <button onClick={(e) => dispatch(ftchdata())}>Set data</button>
      <button
        type="button"
        onClick={() => {
          setisrendered(true);
        }}
      >
        click this to show component
      </button>
      {isrendered && <Disp />}
      {/* <Disp /> */}
    </div>
  );
}
