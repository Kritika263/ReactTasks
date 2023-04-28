import React from 'react'
import '../Header.css'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
function Header() {
    let bookInCart = useSelector((state) => state.cart.booksInCart);
    return (
        <div className='navbar-list'>
            <div className='navbar-left-item'>eCommerce Site</div>
            <div className='navbar-right-item'>
                <ul >
                    <li> <NavLink to="/">Home</NavLink></li>
                    <li>|</li>
                    <li><NavLink to="/order">Order</NavLink></li>
                    <li>|</li>
                    <li><NavLink to="/cart">Cart({bookInCart.length})</NavLink></li>
                </ul>
            </div>
        </div>
    )
}
export default Header;