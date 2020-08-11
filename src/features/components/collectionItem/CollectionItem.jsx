import React from 'react';
import './styles.scss';
import CustomButton from '../customButton';

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div style={{ backgroundImage: `url(${imageUrl})` }} className="image" />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">R${price}</span>
      </div>
      <CustomButton inverted>Add ao Carrinho</CustomButton>
    </div>
  );
};

export default CollectionItem;
