import { combineReducers } from 'redux';
import ModelReducer from './ModelReducer';
import NavTabReducer from './NavTabReducer';
import ProductListReducer from './ProductListReducer';
export const rootReducer = combineReducers({
  NavTabReducer,
  ProductListReducer,
  ModelReducer,
});
