import React from 'react';

import './styles.scss';
import { connect } from 'react-redux';

import { addItem } from '../../../redux/cart/cart.actions';
import CustomButton from '../customButton';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div style={{ backgroundImage: `url(${imageUrl})` }} className="image" />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">R${price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add ao Carrinho
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(CollectionItem);
