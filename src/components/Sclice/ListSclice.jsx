import { createSlice } from "@reduxjs/toolkit";
import { ftchdata } from "../apicalling/Callingappp";
import { delhdata } from "../apicalling/delete";
import { Deletedata } from "../apicalling/Adding";

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
      state.data = action.payload;
      console.log("action.payload", action.payload);
    });
    builder.addCase(ftchdata.rejected, (state, action) => {
      state.isLoading = false;
      state.iserror = action.error;
    });

    builder.addCase(delhdata.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(delhdata.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.push(action.payload);
      console.log("this is action.payload of adding", action.payload);
    });
    builder.addCase(delhdata.rejected, (state, action) => {
      state.isLoading = false;
      state.iserror = action.error;
    });

    builder.addCase(Deletedata.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(Deletedata.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = state.data.filter((item) => {
        return item.id !== action.payload;
      });
      builder.addCase(Deletedata.rej, (state, action) => {
        state.isLoading = false;
        state.iserror = action.error;
      });
    });
  },
});
export { ListSlice };
