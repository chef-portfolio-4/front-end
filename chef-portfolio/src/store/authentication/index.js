export { authenticationReducer } from "./AuthenticationReducer";
export { login } from "./AuthenticationActions";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Reducers
import { authenticationReducer } from "./authentication/AuthenticationReducer";
import { chefReducer } from "./chef/ChefReducer";

//
const combinedReducers = combineReducers({
  auth: authenticationReducer,
  chef: chefReducer
});

const store = createStore(
  combinedReducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
