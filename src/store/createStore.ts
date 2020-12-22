import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/masters';

// @ts-ignore
export default createStore(rootReducer, applyMiddleware(thunk));
