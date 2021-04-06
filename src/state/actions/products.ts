import * as Types from './types';

export const addProduct = (product: any) => {
  return {
    type: Types.ADD_PRODUCTS,
    payload: product
  };
};
