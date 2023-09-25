import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menuSlice";
import popupSlice from "./popupSlice";
import todoSlice from "./todoSlice";


const store=configureStore({
    reducer:{
        menu:menuSlice,
        popup:popupSlice,
        todo:todoSlice
    }
})


export default store