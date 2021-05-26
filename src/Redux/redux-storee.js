import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import homePageReducer from "./homePageReducer";
import myMiddleware, {middleware} from "../custom-middleware/myMiddleware";

let reducers = combineReducers({
    homePage: homePageReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(middleware)));


export default store;