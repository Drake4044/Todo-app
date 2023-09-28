import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, getUserTodos } from "../redux/acctions";
import Cookies from "universal-cookie";
import Button from "./button";

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
            <form onSubmit={ handleSubmit } class="flex justify-center items-center space-x-10" >
                <input 
                type="text" 
                value={userInput} 
                onChange={handleChange} 
                class="border-solid border-2 border-sky-700 rounded-md hover:border-amber-400 duration-200 focus:outline-none focus:ring focus:ring-amber-400 focus:border-transparent pl-2"
                />
                <Button onClick={handleSubmit} >Add To Do</Button>
            </form>
        </div>
    )
}

export default TodoFrom