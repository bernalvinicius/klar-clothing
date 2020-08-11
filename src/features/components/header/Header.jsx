import React from 'react';
import './styles.scss';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../../assets/images/klar.svg';
import { selectCartHidden } from '../../../redux/cart/cart.selectors';
import CartDropdown from '../cartDropdown';
import CartIcon from '../cartIcon';

const Header = ({ hidden }) => {
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
        {hidden ? null : <CartDropdown />}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
