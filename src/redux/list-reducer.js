//Названия действий
import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://transloc-api-1-2.p.rapidapi.com/agencies.json',
    params: {
        callback: 'call',
        geo_area: '35.80176,-78.64347|35.78061,-78.68218',
        agencies: '12'
    },
    headers: {
        'x-rapidapi-host': 'transloc-api-1-2.p.rapidapi.com',
        'x-rapidapi-key': 'b7bddf2be0msh14bd01f2dd1af34p168a17jsn951ace10d673',
        'Cache-Control':'no-cache'
    }
};

const SET_TODO = 'SET_TODO';
const DELETE_TODO = 'DELETE_TODO';
const TOGGLE_DONE = 'TOGGLE_DONE';
const SET_INPUT_VALUE = 'SET_INPUT_VALUE';
const UPDATE_TODO = 'UPDATE_TODO';
//Начальное состояние state
const initialState = {
    list: [],
    nextId: 0,
    inputValue: '',
}
//Обрабатываем действия
const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TODO:
            // let date = new Date();
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: state.nextId,
                        text: state.inputValue,
                        // date: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`,
                        date: action.date,
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
                    if (todo.id === action.id) {
                        return {
                            ...todo, done: !todo.done
                        }
                    } else {
                        return todo;
                    }
                })]
            };
        case UPDATE_TODO:
            return {
                ...state,
                list: [...state.list.map(todo => {
                    if (todo.id === action.id) {
                        return {
                            ...todo, text: action.text
                        }
                    } else {
                        return todo;
                    }
                })]
            };
        default:
            return state
    }
}
//Создатели действий
export const setTodo = date => ({type: SET_TODO, date})
export const deleteTodo = id => ({type: DELETE_TODO, id})
export const toggleDone = id => ({type: TOGGLE_DONE, id})
export const setInputValue = (value) => ({type: SET_INPUT_VALUE, value})
export const updateTodo = (id, text) => ({type: UPDATE_TODO, id, text})

export const createTodo = () => dispatch => {
    axios.request(options).then(function (response) {
        console.log(response.data);
        dispatch(setTodo(response.data.generated_on))
    }).catch(function (error) {
        console.error(error);
    });
}

export default listReducer;
