import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';
import authMiddleware from '../middlewares/authMiddleware';
import recipesMiddleware from '../middlewares/recipesMiddleware';

// for devtools extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// two middlewares for recipe and atuhentification
const enhancers = composeEnhancers(applyMiddleware(authMiddleware, recipesMiddleware));

// we create the store
const store = createStore(reducer, enhancers);

export default store;
