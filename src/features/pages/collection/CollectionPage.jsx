import React from 'react';

import './styles.scss';
import { connect } from 'react-redux';

import { selectColletion } from '../../../redux/shop/shop.selectors';

import CollectionItem from 'features/components/collectionItem/CollectionItem';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectColletion(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
