// for total calcul

import { createSelector } from 'reselect';


export const selectCartData = state => state.cartData;

// we pull out the cartItem to work with it
export const selectCartItems = createSelector(
    [selectCartData],
    cartData => cartData.cartItems // retrun cartItems data of store
);

// calcul total
export const selectCartItemsCount = createSelector(
    [selectCartItems], // getting cart items array 
    cartItems => 
        //calcul with each item in the cartItem
        cartItems.reduce(
            (quantity, cartItem) =>
            quantity + cartItem.quantity,
            0 // quantity by default
        )
)

//calcul total price of cart

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (total,cartItem) =>
        total + cartItem.price * cartItem.quantity,
        0 // by default
    )
);

