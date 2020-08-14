import ShopActionTypes from './shop.types';

export const addProduct = (item) => ({
  type: ShopActionTypes.ADD_PRODUCT,
  payload: item,
});
