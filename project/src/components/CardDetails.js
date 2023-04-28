import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../CardDetails.css';
import { useDispatch } from 'react-redux';
import { addBook } from '../features/cart/cartSlice';

function CardDetails() {
    const bookData = useLocation().state;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleCart = () => {
        alert("item has been added to the cart ")
        dispatch(addBook(bookData));
    }
    const handleBuy = () => {
        dispatch(addBook(bookData));
        navigate('/cart');
    }
    return (
        <>
            <div className='card-details-container'>
                <div className='img-container'>
                    <img src={bookData.volumeInfo.imageLinks.thumbnail} id="book-img" alt="hello"></img>
                </div>
                <div className='book-details-container'>
                    <h2>{bookData.volumeInfo.title}</h2>
                    <h1>{bookData.volumeInfo.authors.join(", ")}</h1>
                    <h1>{bookData.volumeInfo.pageCount} pages</h1>
                    <div className="details-buttons">
                        <button onClick={handleCart}>Add to Cart</button>
                        <button onClick={handleBuy}>Buy Now</button>
                    </div>
                    <p>{bookData.volumeInfo.description}</p>
                </div>
            </div>
        </>
    )
}
export default CardDetails
