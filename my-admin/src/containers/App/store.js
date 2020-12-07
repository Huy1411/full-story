import { combineReducers, applyMiddleware, createStore } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import {sidebarReducer, themeReducer, rtlReducer, authReducer, usersReducer} from '../../redux/reducers';
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension"


const reducers = combineReducers({
  form: reduxFormReducer, // mounted under "form",
  theme: themeReducer,
  sidebar: sidebarReducer,
  rtl: rtlReducer,
  auth: authReducer,
  users: usersReducer
});

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export default store;