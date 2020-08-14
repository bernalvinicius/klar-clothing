import React, { useState } from 'react';
import './styles.scss';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../../assets/images/klar.svg';
import { selectCartHidden } from '../../../redux/cart/cart.selectors';
import AddProduct from '../addProduct';
import CartDropdown from '../cartDropdown';
import CartIcon from '../cartIcon';

const Header = ({ hidden }) => {
  const [open, setOpen] = useState(false);

  const openDialog = () => {
    setOpen(true);
  };

  const closeDialog = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="header">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="options">
          <Link className="option" to="/shop">
            SHOP
          </Link>
          <button className="button" onClick={openDialog}>
            CADASTRAR PRODUTO
          </button>
          <CartIcon />
          {hidden ? null : <CartDropdown />}
        </div>
      </div>
      <AddProduct open={open} handleClose={closeDialog} />
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
