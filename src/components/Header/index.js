import React from 'react'
import { Link } from 'react-router-dom';
import './styles.scss'
import { useSelector } from 'react-redux';

import { selectCartItemsCount } from '../../redux/Cart/cart.selector';

const mapState = (state) => ({
    totalNumCartItems: selectCartItemsCount(state)
});
const Header = () => {
    const {totalNumCartItems } = useSelector(mapState);
    return (
        <header className='header'>
          <Link to='/cart'>
              Cart({totalNumCartItems})
          </Link>
          <Link to='/'>
              Home
          </Link>
        </header>
    )
}

export default Header;