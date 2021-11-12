import {applyMiddleware, compose, createStore} from "redux";
import listReducer from "./list-reducer";
import thunkMiddleWare from 'redux-thunk';
//Создаём хранилище redux с одним обработчиком действий
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(listReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMiddleWare)
));


window.store = store;
export default store;