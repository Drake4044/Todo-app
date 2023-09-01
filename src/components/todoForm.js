import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, getUserTodos } from "../redux/acctions";
import Cookies from "universal-cookie";

const TodoFrom = () => {

    const [ userInput , setUserInput ] = useState("")
    const coockies = new Cookies()
    const userId = coockies.get("userId")

    const todos = useSelector(state => state.todos)

    const dispatch = useDispatch()

    const handleChange = e => {
        const { value } = e.target
        setUserInput(value)
    }

    const findTask = todos.map( todo => todo.task)

    const handleSubmit = async e => {
        e.preventDefault()
        if (userInput.trim() !== "" && !findTask.includes(userInput)) {
            let newItem = {
                userId: userId,
                task: userInput,
                complete: false
            }
            await dispatch(addTodo(newItem))
            dispatch(getUserTodos(userId))
            setUserInput("")
        }
        if(findTask.includes(userInput)) {
            setUserInput("esta tarea ya existe!!")
        }
    }

    return (
        <div>   
            <form onSubmit={ handleSubmit } >
                <input type="text" value={userInput} onChange={handleChange} />
                <button>Add To Do</button>
            </form>
        </div>
    )
}

export default TodoFrom