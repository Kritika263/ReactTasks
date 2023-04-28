import { createSlice } from '@reduxjs/toolkit';


const initialState={
    booksData : []
}
const cardSlice = createSlice({
    name:"books",
    initialState:initialState,
    reducers:{
        getBooks:(state,action)=>{
             state.booksData=action.payload;
        }
    }
})

export default cardSlice.reducer;
export const {getBooks} = cardSlice.actions;