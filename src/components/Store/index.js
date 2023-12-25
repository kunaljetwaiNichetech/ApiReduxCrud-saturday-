import { configureStore } from "@reduxjs/toolkit";
import { ListSlice } from "../Sclice/ListSclice";


const store =configureStore({
    reducer:{
        Show:ListSlice.reducer
    }
})

const inital =store.getState()
console.log("initalstore",inital)
export { store}
export * from '../apicalling/Callingappp'
export * from '../apicalling/delete'
export * from "../apicalling/Adding"