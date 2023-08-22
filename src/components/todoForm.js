import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, getAllTodos } from "../redux/acctions";

const TodoFrom = () => {

    const [ userInput , setUserInput ] = useState("")

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
                task: userInput,
                complete: false
            }
            await dispatch(addTodo(newItem))
            dispatch(getAllTodos())
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