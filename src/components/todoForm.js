import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/acctions";

const TodoFrom = () => {

    const [ userInput , setUserInput ] = useState("")

    const todos = useSelector(state => state.todos)

    const dispatch = useDispatch()

    const handleChange = e => {
        const { value } = e.target
        setUserInput(value)
    }

    const arrayTask = () => {
        const values = []
        todos.forEach( todo => values.push(todo.task))
        return values
    }

    const findTask = arrayTask()
    

    const handleSubmit = e => {
        e.preventDefault()
        if (userInput.trim() !== "" && !findTask.includes(userInput)) {
            let newItem = {
                id: todos[todos.length-1].id + 1, // siempre el siguiente numero del ultimo id, esto evita que se dupliquen ids al eliminarlos.
                task: userInput,
                complete: false
            }
            dispatch(addTodo(newItem))
            setUserInput("")
        }
        if(findTask.includes(userInput)) {
            setUserInput("")
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