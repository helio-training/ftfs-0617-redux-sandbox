import { createStore } from 'redux';

import Reducers from '../reducers';

const REDUX_DEVTOOLS = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default createStore(Reducers, REDUX_DEVTOOLS);