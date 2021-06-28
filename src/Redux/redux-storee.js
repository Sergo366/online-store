import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import homePageReducer from "./homePageReducer";
import { reducer as formReducer } from 'redux-form'
import apiMiddleware from "./My-middleware";

let reducers = combineReducers({
    homePage: homePageReducer,
    form: formReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));


export default store;