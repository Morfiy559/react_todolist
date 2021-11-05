import React from "react";
import Todo from "../Todo/Todo";
import {connect} from "react-redux";
import s from './List.module.scss';
import {deleteTodo, toggleDone, updateTodo} from "../redux/list-reducer";
const List = ({list,deleteTodo,toggleDone,updateTodo})=>{
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
    list:state.list
})
export default connect(mapStateToProps,{deleteTodo,toggleDone,updateTodo})(List);