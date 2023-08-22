import axios from "axios"

export const GET_ALL_TODOS = "GET_ALL_TODOS"
export const COMPLETE_TODO = "COMPLETE_TODO"
export const ADD_TODO = "ADD_TODO"
export const DELETE_TODO = "DELETE_TODO"


export const getAllTodos = () => {
    return async dispatch => {
        try {
            const url = "http://localhost:3001/todos"
            const todos = await fetch(url)
            .then(data => data.json())
            dispatch({
            type: GET_ALL_TODOS,
            payload: todos
        })
        } catch (error) {
            console.log(error);
        } 
    }
}

export const completeTodo = id => {
    return {
        type: COMPLETE_TODO,
        payload: id
    }
}

export const addTodo = todo => {
    return async () => {
        try {
            const url = "http://localhost:3001/todos"
            const todos = await axios.post(url,todo)
            console.log(todos.data);
        } catch (error) {
            console.log(error);
        } 
    }
}

export const deleteTodo = id => {
    return {
        type: DELETE_TODO,
        payload: id
    }
}