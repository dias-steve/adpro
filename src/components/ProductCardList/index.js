import React from 'react';
import './styles.scss';
import  { selectCartItems, selectCartTotal} from './../../redux/Cart/cart.selector';
import { createStructuredSelector } from 'reselect';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const mapState = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

const ProductCardList = () => {
    const { cartItems, total } = useSelector(mapState);
    console.log(cartItems);
    return (<div className='productCardList'>

        <h2> Produit in the cart </h2>
        {cartItems.length > 0  ?(
            <div>
                <ul>
                    {cartItems.map((item,pos) =>{
                        return(
                            <li key={pos}> id: {item.productId} - {item.name} - quantité: {item.quantity} - {item.price} €</li>
                        )
                    })}
                </ul>
                <Link to='/checkout'> checkout </Link>
            </div>
            
        ): <p>votre panier est vide</p>}
        <p>les total est de: { total }€</p>
    </div>)
}

export default ProductCardList;