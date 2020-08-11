import React, { Component } from 'react';

import './styles.scss';
import shop_data from '../../../api/shop_data.js';
import CollectionPreview from '../../components/collectionPreview';

export class ShopPage extends Component {
  state = {
    collections: shop_data,
  };

  render() {
    const { collections } = this.state;

    return (
      <div className="shop-page">
        {collections.map(({ id, ...auxCollection }) => (
          <CollectionPreview key={id} {...auxCollection} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
