import {createSlice} from '@reduxjs/toolkit';

const initialState={
    prevOrders:[]
}
const orderSlice=createSlice({
    name:"orders",
    initialState,
    reducers:{
        addOrders:(state,action)=>{
            state.prevOrders=action.payload;  
        }
    }
})
export default orderSlice.reducer;
export const {addOrders} = orderSlice.actions;