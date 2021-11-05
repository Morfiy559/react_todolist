const SET_TODO = 'SET_TODO';
const DELETE_TODO = 'DELETE_TODO';
const TOGGLE_DONE = 'TOGGLE_DONE';
const SET_INPUT_VALUE = 'SET_INPUT_VALUE';
const UPDATE_TODO = 'UPDATE_TODO';

const initialState = {
    list: [],
    nextId: 0,
    inputValue: '',
}

const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TODO:
            let date = new Date();
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: state.nextId,
                        text: state.inputValue,
                        date: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`,
                        done: false
                    }
                ],
                nextId: ++state.nextId,
                inputValue: ''
            };
        case DELETE_TODO:
            return {
                ...state,
                list: [...state.list.filter(todo => todo.id !== action.id)]
            };
        case SET_INPUT_VALUE:
            return {
                ...state,
                inputValue: action.value
            }
        case TOGGLE_DONE:
            return {
                ...state,
                list: [...state.list.map(todo => {
                    if(todo.id === action.id) {
                        return {...todo,done:!todo.done
                        }
                    }
                    else{
                        return todo;
                    }
                })]
            };
        case UPDATE_TODO:
            return{
                ...state,
                list: [...state.list.map(todo => {
                    if(todo.id === action.id) {
                        return {...todo,text:action.text
                        }
                    }
                    else{
                        return todo;
                    }
                })]
            };
        default:
            return state
    }
}
export const setTodo = (text) => ({type: SET_TODO, text})
export const deleteTodo = id => ({type: DELETE_TODO, id})
export const toggleDone = id => ({type: TOGGLE_DONE, id})
export const setInputValue = (value) => ({type: SET_INPUT_VALUE, value})
export const updateTodo = (id,text) =>({type:UPDATE_TODO,id,text})
export default listReducer;
