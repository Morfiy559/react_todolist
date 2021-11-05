import {createStore} from "redux";
import listReducer from "./list-reducer";

const store = createStore(listReducer);

window.store = store;
export default store;