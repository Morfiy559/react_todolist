import React, {useState} from "react";
import s from './Todo.module.scss';

const Todo = ({id, text, date, done, deleteTodo, toggleDone, updateTodo}) => {
    const [editMode, setEditMode] = useState(false);
    const [updatedText, setUpdatedText] = useState('');
    const editTodo = () => {
        if (editMode) {
            setEditMode(false)
            updateTodo(id, updatedText)
        } else {
            setEditMode(true)
            setUpdatedText(text)
        }
    }
    const updateText = e => {
        setUpdatedText(e.target.value)
    }
    return (
        <div className={s.todo}>
            {
                editMode ?
                    <input onChange={updateText} type="text" value={updatedText}/>
                    :
                    <div>id:{id}_text:{text}_date:{date}</div>

            }

            <button onClick={editTodo}>Изменить</button>
            <button onClick={() => toggleDone(id)}>{done ? 'Сделано' : 'Не сделано'}</button>
            <button onClick={() => deleteTodo(id)}>REMOVE</button>
        </div>

    )
}
export default Todo;