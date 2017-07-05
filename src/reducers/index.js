import { combineReducers } from 'redux';

import cart from './cart';
import items from './items';


export default combineReducers({
  cart,
  items
});