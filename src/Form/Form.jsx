import React from "react";
//Для стилизации использовал styled-components/native
import styled from 'styled-components/native'
import {Button} from 'react-native-web';

import {createTodo, setInputValue} from "../redux/list-reducer";
import {connect} from "react-redux";

//Создаю стилизованные компоненты
const View = styled.View`
  text-align: center;
`;
const ViewControl = styled.View`
  flex-direction: row;
  justify-content: center;
  gap: 5px;
`;
const TextInput = styled.TextInput`
  border: black 1px solid;
  font-size: 20px;
`;
const Text = styled.Text`
font-size: 40px;
font-weight: bold;
`;

//Деструктурируем объект с входными параметрами
const Form = ({createTodo, setInputValue, inputValue, list}) => {

    const inputChange = e => {
        //меняем текст инпута в redux store
        let text = e.target.value;
        setInputValue(text);
    }
    const addTodo = () => {
        //добавляем новое дело если поле input не пустое
        // и его значение не повторяется сравнительно с другими элементами дел
        if (inputValue !== '' && !list.find(todo => todo.text === inputValue)) createTodo()
    }
    return (
        <View>
            <Text>TODOLIST</Text>
            <ViewControl>
                <TextInput onChange={inputChange} value={inputValue} placeholder="Enter title of todo" maxLength={20}/>
                <Button color={'#d90a76'} onPress={() => {
                    addTodo()
                }} title="ADD"/>
            </ViewControl>
        </View>
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
export default connect(mapStateToProps, {setInputValue,createTodo})(Form);