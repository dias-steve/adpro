import React from 'react';
import ProductCardList from '../../components/ProductCardList';
import './styles.scss';

const Cart = () => {
    return (
        <div className="cartpage">
            <p> Cart Page</p>
            <ProductCardList/>
        </div>
    )
}

export default Cart;