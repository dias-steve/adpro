import React from 'react'
import { Link } from 'react-router-dom';
import './styles.scss'
import { useSelector } from 'react-redux';

import { selectCartItemsCount } from '../../redux/Cart/cart.selector';
import Logo from './../../assets/logo-blanc.svg';

const mapState = (state) => ({
    totalNumCartItems: selectCartItemsCount(state)
});
const Header = () => {
    const {totalNumCartItems } = useSelector(mapState);
    return (
        <header className='header'>
            <ul>
                <li><span>MENU</span></li>
                <li><img className="logo" src={Logo}/></li>
                <li><Link to='/cart'>PANIER({totalNumCartItems})</Link></li>
            </ul>

        </header>
    )
}

export default Header;