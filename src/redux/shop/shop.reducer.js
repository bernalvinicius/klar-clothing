import shop_data from './shop.data';
import ShopActionTypes from './shop.types';

const INITAL_STATE = {
  collections: shop_data,
};

const shopReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.ADD_PRODUCT:
      return {
        ...state,
        data: {
          ...state.data,
          items: [...state.data.items, action.payload.item],
        },
      };
    default:
      return state;
  }
};

export default shopReducer;
