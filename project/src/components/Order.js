import React, { useEffect } from 'react';
import '../Order.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import OrderComponent from '../components/OrderComponent'
import axios from 'axios';
import { addOrders } from '../features/orders/orderSlice';
function Order() {

    const orders = useSelector((state) => state.order.prevOrders) || [];
    const dispatch = useDispatch();
    useEffect(() => {
         axios.get('http://localhost:3000/orders')
            .then(res => {
                dispatch(addOrders(res.data));
            })
    }, [])

    return (
        <>
            {
                orders.map((item) => {
                    return <OrderComponent orderData={item} />
                }
                )
            }
        </>
    )
}
export default Order