import React from "react";
import '../CartList.css'
import { useDispatch } from "react-redux";
import { addBook, removeBook } from "../features/cart/cartSlice";
function CartList({ book }) {
    const dispatch = useDispatch();
    const handleaddBook = () => {
        dispatch(addBook(book.data));
    }
    const handleremoveBook = () => {
        dispatch(removeBook(book.data));
    }
    return (
        <div className="cartItems-container">
            <div className="addedBook-container">
                <h1>{book.data.volumeInfo.title}</h1>
                <div className="cart-buttons">
                    <button id="additem" onClick={handleaddBook}>+</button>
                    <div>{book.count}</div>
                    <button id="removeitem" onClick={handleremoveBook}>-</button>
                </div>
            </div>
        </div>
    )
}
export default CartList