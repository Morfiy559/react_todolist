import React, {useState} from "react";
// Для стилизации использловал scss module
import s from './Todo.module.scss';

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
        <div className={s.todo}>
            {
                editMode ?
                    <input onChange={updateText} type="text" value={updatedText}/>
                    :
                    <div>({id})text:{text}_date:{date}</div>

            }
            <div className={s.buttons}>
                <button onClick={editTodo}>{editMode?'Применить':'Изменить'}</button>
                <button onClick={() => toggleDone(id)}>{done ? 'Сделано' : 'Не сделано'}</button>
                <button onClick={() => deleteTodo(id)}>REMOVE</button>
            </div>
        </div>

    )
}
export default Todo;