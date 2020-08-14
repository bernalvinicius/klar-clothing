import React, { useState } from 'react';
import './styles.scss';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../../assets/images/klar.svg';
import { selectCartHidden } from '../../../redux/cart/cart.selectors';
import { selectCollectionsForPreview } from '../../../redux/shop/shop.selectors';
import AddProduct from '../addProduct';
import CartDropdown from '../cartDropdown';
import CartIcon from '../cartIcon';
import { addProduct } from '../../../redux/shop/shop.actions';

const Header = ({ hidden, collections, addProduct }) => {
  const [open, setOpen] = useState(false);

  const openDialog = () => {
    setOpen(true);
  };

  const closeDialog = () => {
    setOpen(false);
  };

  const addNewProduct = (item, category) => {
    console.log('category: ', category);
    /**
     * This console.log() returns:
     * category: ternos
     */

    console.log('item', item);
    /**
     * This console.log() returns:
     * {
     *  "product": "New suit",
     *  "price": "259",
     *  "imageUrl": "https://i.imgur.com/mcEvOpW.jpg"
     * }
     */
  };

  return (
    <>
      <div className="header">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="options">
          <Link className="option" to="/">
            HOME
          </Link>
          <Link className="option" to="/shop">
            SHOP
          </Link>
          <Link className="option" to="/shop/ternos">
            TERNOS
          </Link>
          <Link className="option" to="/shop/sapatos">
            SAPATOS
          </Link>
          <Link className="option" to="/shop/relogios">
            RELÓGIOS
          </Link>
          <Link className="option" to="/shop/calcas">
            CALÇAS
          </Link>
          <Link className="option" to="/shop/camisas">
            CAMISAS
          </Link>
          <button className="button" onClick={openDialog}>
            CADASTRAR PRODUTO
          </button>
          <CartIcon />
          {hidden ? null : <CartDropdown />}
        </div>
      </div>
      <AddProduct
        open={open}
        handleClose={closeDialog}
        addNewProduct={addNewProduct}
      />
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  addProduct: (item) => dispatch(addProduct(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
