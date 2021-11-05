import React from "react";
// Для стилизации использловал scss module
import s from './Form.module.scss';
import {setInputValue, setTodo} from "../redux/list-reducer";
import {connect} from "react-redux";
//Деструктурируем объект с входными параметрами
const Form = ({setTodo, setInputValue, inputValue, list}) => {

    const inputChange = e => {
        //меняем текст инпута в redux store
        let text = e.target.value;
        setInputValue(text);
    }
    const addTodo = () => {
        //добавляем новое дело если поле input не пустое
        // и его значение не повторяется сравнительно с другими элементами дел
        if (inputValue !== '' && !list.find(todo => todo.text === inputValue)) setTodo()
    }
    return (
        <div className={s.title}>
            <h1>TODOLIST</h1>
            <div className={s.control_panel}>
                <input onChange={inputChange} type="text" value={inputValue}/>
                <button onClick={addTodo}>Добавить</button>
            </div>
        </div>
    )
}
const mapStateToProps = state => ({
    //получаем значение поля input и список дел из store
    inputValue: state.inputValue,
    list: state.list
})
//С помощью connect() создаём компонент-контейнер, который подключен к хранилищу Redux.
// Хранилище, к которому осуществляется подключение, получают от самого верхнего
// предка компонента с использованием механизма контекста React.
export default connect(mapStateToProps, {setTodo, setInputValue})(Form);