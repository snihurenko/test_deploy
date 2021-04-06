import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import ProductsReducer from './reducers/productsReducer';
import HotelsReducer from './reducers/hotelsReducer';

const rootReducer = combineReducers({
  products: ProductsReducer,
  hotels: HotelsReducer
});
export type AppState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, applyMiddleware(thunk));
