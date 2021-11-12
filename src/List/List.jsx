import React from "react";
import Todo from "../Todo/Todo";
import {connect} from "react-redux";
import {deleteTodo, toggleDone, updateTodo} from "../redux/list-reducer";
//Стилизую с помощью styled-components/native
import styled from "styled-components/native";
//Создаю стилизованные компоненты

const View = styled.View`
  margin-top: 10px;
  align-items: center;
`;

//Деструктурируем объект с входными параметрами
const List = ({list,deleteTodo,toggleDone,updateTodo})=>{
    //Выводим массив компонентов дел с передачей в каждый определённых параметров
    return(
        <View>
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
        </View>
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