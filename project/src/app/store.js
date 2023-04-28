import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import cardsReducer from '../features/cards/cardSlice';
import cartReducer from '../features/cart/cartSlice';
import orderReducer from '../features/orders/orderSlice';

import { createLogger } from 'redux-logger'

const logger = createLogger();
export const store = configureStore({

    reducer: {
        card: cardsReducer,
        cart: cartReducer,
        order: orderReducer
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

