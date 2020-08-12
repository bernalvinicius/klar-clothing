import shop_data from './shop.data';

const INITAL_STATE = {
  collections: shop_data,
};

const shopReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
