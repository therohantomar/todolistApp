import { createSlice } from "@reduxjs/toolkit";

const popupSlice=createSlice({
    name:"popup",
    initialState:{
        isCreatePopupOpen:false,
    },
    reducers:{
        toggleCreatePopup:(state)=>{
            state.isCreatePopupOpen=!state.isCreatePopupOpen
        }
    }
})

export const {toggleCreatePopup}= popupSlice.actions

export default popupSlice.reducer