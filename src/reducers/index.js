import { combineReducers } from 'redux';

import recipesReducer from './recipes';
import userReducer from './user';
import messagesReducer from './messages';

const rootReducer = combineReducers({
  user: userReducer,
  recipes: recipesReducer,
  messages: messagesReducer,

});

export default rootReducer;
