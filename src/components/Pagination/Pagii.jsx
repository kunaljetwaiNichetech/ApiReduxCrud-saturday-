import React from "react";

export default function Pagii({ showingadta, postPerpage, setcurrentpage }) {
  let pages = [];
  for (let i = 1; i <= Math.ceil(showingadta / postPerpage); i++) {
    // pages.push(i);
  }
  return (
    <div>
      {pages.map((page, index) => {
        for (let i = 0; i <= pages.length; i++) {
          console.log("this is iiiiiiiiii", i);
        }
        return (
          <>
            <button key={index} onClick={() => setcurrentpage(page)}>
              {page}
              {console.log(page)}
            </button>
          </>
        );
      })}
    </div>
  );
}
