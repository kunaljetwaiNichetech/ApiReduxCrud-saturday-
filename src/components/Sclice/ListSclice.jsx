import { createSlice } from "@reduxjs/toolkit";
import { ftchdata } from "../apicalling/Callingappp";
import { delhdata } from "../apicalling/delete";
import { Deletedata } from "../apicalling/Adding";
import { editData } from "../apicalling/Edit";

const ListSlice = createSlice({
  name: "List",
  initialState: {
    isLoading: false,
    data: [],
    iserror: false,
  },

  extraReducers: (builder) => {
    builder.addCase(ftchdata.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(ftchdata.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload.items;
    });
    builder.addCase(ftchdata.rejected, (state, action) => {
      state.isLoading = false;
      state.iserror = action.error;
    });
    /////post reducer

    builder.addCase(delhdata.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(delhdata.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.push(action.payload.items);
      console.log("this is action.'payload of adding", action.payload.items);
    });
    builder.addCase(delhdata.rejected, (state, action) => {
      state.isLoading = false;
      state.iserror = action.error;
    });
    /////// delete reducer
    builder.addCase(Deletedata.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(Deletedata.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = state.data.filter(
        (item) => item._uuid !== action.payload._uuid
      );
      console.log(
        "action.payload delete action payload isn this",
        action.payload
      );
    });
    /////// edit reducer
    builder.addCase(editData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(editData.fulfilled, (state, action) => {
      state.isLoading = false;
      const { name, lastname, email, _uuid } = action.payload;
      console.log("name", name);
      console.log("id", lastname);
      console.log("emailllllll", email);

      const editedList = state.data.map((item) => {
        if (item._uuid === _uuid) {
          return {
            ...item,
            name: name,
            lastname: lastname,
            email: email,
          };
        }
        return item;
      });
      state.data = editedList;
      console.log("this is action.'payload of edits", action.payload);
    });
    builder.addCase(editData.rejected, (state, action) => {
      state.isLoading = false;
      state.iserror = action.error;
    });
  },
});
export { ListSlice };
