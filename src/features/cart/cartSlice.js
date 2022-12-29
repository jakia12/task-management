import { createSlice } from '@reduxjs/toolkit'
import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { loading } from '../../data/AuthData';
import { cartItems } from '../../data/placeholder';


const initialState = {
    cartItems: cartItems,
    amount: 0,
    total: 0,

};


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = []
        }
    }

});

console.log(cartSlice);

export const { clearCart } = cartSlice.actions;

export default cartSlice.reducer;
