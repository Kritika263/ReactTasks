import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    booksInCart: localStorage.getItem('user') ?
        JSON.parse(localStorage.getItem('user')) : []

}
const cartSlice = createSlice({
    name: "cartItems",
    initialState,
    reducers: {
        addBook: (state, action) => {
            const bookId = action.payload.id;
            const addedBook = state.booksInCart.find((ele) => ele.data.id === bookId);

            if (addedBook) { addedBook.count++; }
            else {
                state.booksInCart.push({
                    data: action.payload,
                    count: 1
                })
            }
            localStorage.setItem('user', JSON.stringify(state.booksInCart));
        },
        removeBook: (state, action) => {
            const bookId = action.payload.id;
            const bookToRemove = state.booksInCart.find((elem) => elem.data.id === bookId);
            if (bookToRemove.count === 1)
                state.booksInCart = state.booksInCart.filter((elem) => {
                    return elem.data.id !== bookId
                });
            else {
                bookToRemove.count--; 
            }
            localStorage.setItem('user', JSON.stringify(state.booksInCart));
        },
        emptyCart: (state) => {
            state.booksInCart.splice(0, state.booksInCart.length);
            localStorage.clear();
        }
    }

})
export default cartSlice.reducer;
export const { addBook, emptyCart, removeBook } = cartSlice.actions;