import { combineReducers, createStore, applyMiddleware } from 'redux';
//import thunk from 'redux-thunk';

import createSagaMiddleware from 'redux-saga';

import ProductsReducer from './reducers/productsReducer';
import HotelsReducer from './reducers/hotelsReducer';

import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  products: ProductsReducer,
  hotels: HotelsReducer
});

export type AppState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
