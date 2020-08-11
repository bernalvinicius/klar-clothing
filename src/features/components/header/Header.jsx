import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../../assets/images/klar.svg';
import CartIcon from '../cartIcon';

const Header = () => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        <CartIcon />
      </div>
    </div>
  );
};
export default Header;
