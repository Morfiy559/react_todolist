import React from "react";
import s from './Form.module.scss';
import {setInputValue, setTodo} from "../redux/list-reducer";
import {connect} from "react-redux";

const Form = ({setTodo, setInputValue, inputValue,list}) => {
    const inputChange = e => {
        let text = e.target.value;
        setInputValue(text);
    }
    const addTodo = () => {
        if(inputValue!=='' && !list.find(todo=>todo.text===inputValue))setTodo()
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
    inputValue: state.inputValue,
    list:state.list
})
export default connect(mapStateToProps, {setTodo, setInputValue})(Form);