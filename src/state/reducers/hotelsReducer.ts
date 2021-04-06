import * as Types from '../actions/types';
import { HotelsType } from '../actions/types';

const initialState = {
  loading: false,
  items: [],
  itemsCount: 0,
  total: 0
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case HotelsType.GET_All_REQUEST: {
      return {
        ...state,
        loading: true
      };
    }
    case HotelsType.GET_ALL_SUCCESS: {
      return {
        ...state,
        loading: false,
        items: action.payload.items,
        itemsCount: action.payload.itemsCount,
        total: action.payload.total
      };
    }
    case HotelsType.GET_ALL_FAIL: {
      return {
        ...state,
        loading: false
      };
    }

    case HotelsType.ADD_HOTEL_REQUEST: {
      return {
        ...state,
        loading: true
      };
    }
    case HotelsType.ADD_HOTEL_SUCCESS: {
      return {
        ...state,
        loading: false,
        items: [...state.items, action.payload],
        itemsCount: state.itemsCount + 1,
        total: state.total + 1
      };
    }
    case HotelsType.ADD_HOTEL_FAIL: {
      return {
        ...state,
        loading: false
      };
    }

    default:
      return state;
  }
};

