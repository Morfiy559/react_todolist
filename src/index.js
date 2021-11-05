import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import store from './redux/redux-store'
//С помощью Provider свойство store передаётся, в соответствии с иерархией приложения,
// компонентам-контейнерам, с использованием механизма контекста React
ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);


reportWebVitals();
