import * as Types from '../actions/types';

const initialState = {
  products: [
    {
      id: 1,
      name: 'apple'
    }
  ]
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case Types.ADD_PRODUCTS: {
      return {
        ...state,
        products: [...state.products, action.payload]
      };
    }

    default:
      return state;
  }
};
