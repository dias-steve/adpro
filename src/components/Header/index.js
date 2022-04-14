import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import { useSelector } from "react-redux";

import { selectCartItemsCount } from "../../redux/Cart/cart.selector";
import Logo from "./../../assets/logo-blanc.svg";

const mapState = (state) => ({
  totalNumCartItems: selectCartItemsCount(state),
});
const Header = () => {
  const { totalNumCartItems } = useSelector(mapState);
  return (
    <nav className="nav">
      <div className="menu menu-principal">
        <div className="menu-principal-list left">
          <NavItem name="MENU">
            <ul className="menu menu-secondary">
              <li>
                <Link className="menu-button" to="/">
                  HOME
                </Link>
              </li>
              <li>
                <Link className="menu-button" to="/collection">
                  COLLECTIONS
                </Link>
              </li>
              <li>
                <Link className="menu-button" to="/collection">
                  SHOT
                </Link>
              </li>
              <li>
                <Link className="menu-button" to="/collection">
                  NOUS CONTACTER
                </Link>
              </li>
            </ul>
          </NavItem>
        </div>

        <div className="menu-principal-list center">
          <img className="logo" src={Logo} />
        </div>
        <div className="menu-principal-list right">
          <NavItem name={`PANIER(${totalNumCartItems})`}>
            <ul className="menu menu-secondary cart">
              <li>
                <Link className="menu-button" to="/collection">
                  Item1
                </Link>
              </li>
            </ul>
          </NavItem>
        </div>
      </div>
    </nav>
  );
};
const NavItem = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="nav-item">
      <div
        className="item-list"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          
        >
          {props.name}
        </button>

        {open && props.children}
      </div>
    </div>
  );
};

export default Header;
