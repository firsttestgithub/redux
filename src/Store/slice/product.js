import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import STATUS from "./state";

let IINITIAL_STATE = {
getProduct:[],
status:STATUS,
}
let getProduct = createSlice({
name : "Get_product",
initialState: IINITIAL_STATE,

extraReducers:(builder)=>{
builder.addCase(fetchProduct.pending, (state,action) => {
  state.status = STATUS.PENDIND;
});
builder.addCase(fetchProduct.fulfilled,(state,action)=>{
state.status = STATUS.COMPLETED;
state.getProduct = action.payload
});
builder.addCase(fetchProduct.rejected,(state,action)=>{
  state.status = STATUS.ERROR;
});
}
})
let {reducer} = getProduct

let fetchProduct = createAsyncThunk("fetchProduct",async()=>{
let response = await axios.get("https://fakestoreapi.com/products");
return response.data;
})

export{
    fetchProduct,
    reducer as getReducer,
}