//Libraries
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Reducers
import { authenticationReducer } from "./authentication/AuthenticationReducers";
import recipeReducer from "./recipe/RecipeReducer";

//
const combinedReducers = combineReducers({
  auth: authenticationReducer,
  recipeReducer
});

const store = createStore(
  combinedReducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
