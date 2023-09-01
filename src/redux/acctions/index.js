import axios from "axios"

export const GET_ALL_TODOS = "GET_ALL_TODOS"
export const COMPLETE_TODO = "COMPLETE_TODO"
export const ADD_TODO = "ADD_TODO"
export const DELETE_TODO = "DELETE_TODO"
export const GET_USER_TODOS = "GET_USER_TODOS"


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

export const getUserTodos = id => {
    return async dispatch => {
        try {
            const url = `http://localhost:3001/todos/${id}`
            const todos = await fetch(url)
            .then(data => data.json())
            dispatch({
            type: GET_USER_TODOS,
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

export const loginUser = user => {
    return async () => {
        try {
            const url = "http://localhost:3001/users/login"
            const login = await axios.post(url,user)
            window.location.href = "./"
            alert(`Bienvenido/a ${login.data.name}`);
            return login.data
        } catch (error) {
            alert(error.response.data);
        } 
    }
}

export const createUser = user => {
    return async () => {
        try {
            const url = "http://localhost:3001/users"
            const login = await axios.post(url,user)
            window.location.href = "./login"
            console.log(login.data);
        } catch (error) {
            alert(error.response.data);
        } 
    }
}

