import { configureStore } from "@reduxjs/toolkit";
import { ListSlice } from "../Sclice/ListSclice";


const store =configureStore({
    reducer:{
        Show:ListSlice.reducer
    }
})

export { store}
export * from '../apicalling/Callingappp'
export * from '../apicalling/delete'
export * from "../apicalling/Adding"