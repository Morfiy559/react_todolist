import React from "react";
import Todo from "../Todo/Todo";
import {connect} from "react-redux";
// Для стилизации использловал scss module
import s from './List.module.scss';
import {deleteTodo, toggleDone, updateTodo} from "../redux/list-reducer";

//Деструктурируем объект с входными параметрами
const List = ({list,deleteTodo,toggleDone,updateTodo})=>{
    //Выводим массив компонентов дел с передачей в каждый определённых параметров
    return(
        <div className={s.list}>
            {list.map(todo=><Todo
                key={todo.id}
                id={todo.id}
                text={todo.text}
                date={todo.date}
                done={todo.done}
                deleteTodo={deleteTodo}
                toggleDone={toggleDone}
                updateTodo={updateTodo}
            />)}
        </div>
    )
}

const mapStateToProps = state=>({
    // получаем список дел из store
    list:state.list
})
//С помощью connect() создаём компонент-контейнер, который подключен к хранилищу Redux.
// Хранилище, к которому осуществляется подключение, получают от самого верхнего
// предка компонента с использованием механизма контекста React.
export default connect(mapStateToProps,{deleteTodo,toggleDone,updateTodo})(List);