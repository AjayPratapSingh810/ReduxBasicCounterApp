import { createSlice } from "@reduxjs/toolkit";

const numberSlice = createSlice({
    name : "number",
    initialState:{number:0},
    reducers:{
        addNumber:(state,action) =>{
            state.number = state.number+1;
        },
        subNumber:(state,action) =>{
            state.number = state.number-1;
        }
    }
})

export const {addNumber,subNumber} = numberSlice.actions;
export default numberSlice.reducer;