import { render } from 'react-native-web';
import App from './App';
import {Provider} from "react-redux";
import store from './redux/redux-store'
//С помощью Provider свойство store передаётся, в соответствии с иерархией приложения,
// компонентам-контейнерам, с использованием механизма контекста React
render(
    <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);


