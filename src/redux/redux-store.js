import {createStore} from "redux";
import listReducer from "./list-reducer";
//Создаём хранилище redux с одним обработчиком действий
const store = createStore(listReducer);

window.store = store;
export default store;