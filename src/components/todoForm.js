import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, getUserTodos } from "../redux/acctions";
import Cookies from "universal-cookie";

const TodoFrom = () => {

    const [ userInput , setUserInput ] = useState("")
    const coockies = new Cookies()
    const userId = coockies.get("userId")

    const dispatch = useDispatch()

    const handleChange = e => {
        const { value } = e.target
        setUserInput(value)
    }

    const handleSubmit = async e => {
        e.preventDefault()
        if (userInput.trim() !== "") {
            let newItem = {
                userId: userId,
                task: `${userInput.charAt(0).toUpperCase()}${userInput.slice(1)}`,
                complete: false
            }
            await dispatch(addTodo(newItem))
            dispatch(getUserTodos(userId))
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