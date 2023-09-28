import axios from "axios"

export const GET_ALL_TODOS = "GET_ALL_TODOS"
export const GET_USER_TODOS = "GET_USER_TODOS"
export const GET_USER = "GET_USER"
export const DELETE_USER = "DELETE_USER"


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

export const getUser = id => {
    return async dispatch => {
        try {
            const url = `http://localhost:3001/users/${id}`
            const user = await fetch(url)
            .then(data => data.json())
            dispatch({
            type: GET_USER,
            payload: user
        })
        } catch (error) {
            console.log(error);
        } 
    }
}

export const completeTodo = (id, task) => {
    return async () => {
        try {
            const todo = { id, task }
            const url = "http://localhost:3001/todos/complete"
            const completeTodo = await axios.put(url,todo)
            console.log(completeTodo);
            alert(`Se cambio el estado de la tarea "${task}"`)
        } catch (error) {
            console.log(error);
        } 
    }
}

export const editTodo = (todo) => {
    return async () => {
        try {
            const url = "http://localhost:3001/todos/edit"
            if(todo.task.trim() === ""){
                alert("No se puede guardar una tarea 'vacia'")
            } else {
            await axios.put(url,todo)
            alert(`Se a editado la tarea"`)
            }
        } catch (error) {
            console.log(error);
        } 
    }
}

export const addTodo = todo => {
    return async () => {
        try {
            const url = "http://localhost:3001/todos"
            const todos = await axios.post(url,todo)
            console.log(todos);
            alert(`Se agrego la tarea "${todo.task}"`)
        } catch (error) {
            alert(error.response.data);
        } 
    }
}

export const deleteTodo = (id, task) => {
    return async () => {
        try {
            const todo = { id, task }
            const url = "http://localhost:3001/todos"
            const todoToDelete = await axios.delete(url,{ data: todo })
            console.log(todoToDelete);
            alert("La tarea fue eliminada")
        } catch (error) {
            console.log(error.message);
        } 
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
            alert("Usuario creado con exito")
        } catch (error) {
            alert(error.response.data);
        } 
    }
}

export const editUser = user => {
    return async () => {
        try {
            const url = "http://localhost:3001/users/edit"
            await axios.put(url,user)
            alert("Se a editado la el Usuario")
        } catch (error) {
            alert(`${error.response.data}`)
            console.log(error);
        } 
    }
}

export const deleteUser = id => {
    return async dispatch => {
        try {
            const url = "http://localhost:3001/users/delete"
            await axios.delete(url,{ data: id })
            dispatch({
                type: DELETE_USER,
                payload: []
            })
            alert("Usuario eliminado de la base de datos")
        } catch (error) {
            console.log(error);
        } 
    }
}

