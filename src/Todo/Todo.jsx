import React, {useState} from "react";
// Для стилизации использловал styled-components/native
import styled from "styled-components/native";
// import {Button} from "react-native-web";

//Создаю стилизованные компоненты
const TODO = styled.View`
  border: black 1px solid;
  border-radius: 5px;
  margin: 5px 0;
  justify-content: space-between;
  align-items: center;
  //flex-direction: row;
  width: 100%;
  max-width: 600px;
`;
const Buttons = styled.View`
  gap: 5px;
  flex-direction: row;
`;
const TextInput = styled.TextInput`
  border: black 1px solid;
  font-size: 20px;
`;
const Text = styled.Text`
  font-size: 20px;
`;
const Button = styled.Button`
`;

//Деструктурируем объект с входными параметрами
const Todo = ({id, text, date, done, deleteTodo, toggleDone, updateTodo}) => {
    //Создаём local state с помощью hook`ов useState
    // для процедуры изменения поля текст определённого дела
    const [editMode, setEditMode] = useState(false);
    const [updatedText, setUpdatedText] = useState('');
    //Изменение режима редактирования дела и отправка обновлённых данных в store
    const editTodo = () => {
        if (editMode) {
            setEditMode(false)
            updateTodo(id, updatedText)
        } else {
            setEditMode(true)
            setUpdatedText(text)
        }
    }
    //Изменение текущего обновлённого текста
    const updateText = e => {
        setUpdatedText(e.target.value)
    }
    return (
        <TODO>
            {
                editMode ?
                    <TextInput onChange={updateText} value={updatedText} maxLength={20}/>
                    :
                    <Text>({id})text:{text} date:{date}</Text>

            }
            <Buttons>
                <Button onPress={editTodo} title={editMode ? 'Применить' : 'Изменить'}/>
                <Button onPress={() => toggleDone(id)} title={done ? 'Сделано' : 'Не сделано'}/>
                <Button onPress={() => deleteTodo(id)} title={'Remove'}/>
            </Buttons>
        </TODO>

    )
}
export default Todo;