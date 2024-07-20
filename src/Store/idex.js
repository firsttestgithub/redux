import { configureStore } from "@reduxjs/toolkit";
import { getReducer } from "./slice/product";





let store = configureStore({
reducer:{
getReducer : getReducer
}

})

export default store;       