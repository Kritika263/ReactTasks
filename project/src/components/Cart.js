import React from 'react';
import Form from './CartForm';
import '../Cart.css';
import CartList from './CartList';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { emptyCart } from '../features/cart/cartSlice';
import { useNavigate } from 'react-router-dom';
function Cart() {

  let bookInCart = useSelector((state) => state.cart.booksInCart);
  const navigate = useNavigate();

  const totalPrice = Math.floor(bookInCart.map((item) => item.data.saleInfo.retailPrice.amount * item.count).reduce((prev, curr) => {
    return curr += prev;
  }, 0))
  const tax = Math.floor(totalPrice * 0.18);



  const dispatch = useDispatch();
  const handleClick = (e) => {
    dispatch(emptyCart());
  }
  const handleOrders = () => {
    dispatch(emptyCart());
    console.log(bookInCart);
    (async () => {
      if (bookInCart.length !== 0) {
        const order = Object.assign({ date: new Date().toDateString() }, bookInCart)
        await axios.post('http://localhost:3000/orders', order);
        navigate('/order');
      }
      else {
        alert("Add something to the cart");
      }
    }

    )();


  }
  return (
    <div className='cartpage-container'>
      <div className='address-form-container'>
        <Form></Form>
      </div>
      <div className='order-container'>
        <div className='cart-container'>
          <div className='cart-header'>
            <h3>Shoping Bag</h3>

          </div>
          <div className='items'>
            {bookInCart.length !== 0 ? (
              bookInCart.map((item) => <CartList book={item} />)
            ) : (<div className='Add-container'>Add Items to the Cart</div>)}
          </div>
        </div>
        <div className='payment-container'>
          <h3>Total Payment</h3>
          <table>
            <tr>
              <td>Items Price</td>
              <td>${totalPrice}
              </td>
            </tr>
            <tr>
              <td>Tax</td>
              <td>${tax}</td>
            </tr>
            <tr>
              <td>Shipping Charge</td>
              {totalPrice === 0 ? (<td>$0</td>) : (<td>$5</td>)}

            </tr>
            <tr>
              <td>
                <hr></hr>
              </td>
            </tr>
            <tr>
              <td>Total</td>
              <td>${totalPrice === 0 ? (0) : (totalPrice + tax + 5)}</td>
            </tr>
          </table>
          <div className='cart-btn'>
            <button onClick={handleOrders}>Checkout</button>
            <button onClick={handleClick}>Empty Cart</button>
          </div>
        </div>
      </div>
    </div>

  )
}
export default Cart