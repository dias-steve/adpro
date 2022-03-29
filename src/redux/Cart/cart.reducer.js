import cartTypes from './cart.types';
import { handleAddToCart } from './cart.utils';
const INITIAL_STATE = {
    cartItems: []
};

const cartReducer = (state=INITIAL_STATE, action) => {
    switch (action.type){
        case cartTypes.ADD_TO_CART:
            return {
                ...state,
                cartItems: handleAddToCart({
                    prevCartItems: state.cartItems,
                    nextCartItem: action.payload
                })
                
            }
        
        case cartTypes.REMOVE_CART_ITEM: 
            return {
                ...state,
                cartItems: state.carteItems.filter(item => item.productId !== action.payload.productId)
            }
     
        default: 
            return state;
    }
}

export default cartReducer;