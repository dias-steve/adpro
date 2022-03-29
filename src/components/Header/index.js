import React from 'react'
import { Link } from 'react-router-dom';
import './styles.scss'


const Header = () => {
    return (
        <header className='header'>
          <Link to='/cart'>
              Cart 
          </Link>
          <Link to='/'>
              Home
          </Link>
        </header>
    )
}

export default Header;