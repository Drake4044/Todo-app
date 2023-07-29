import React, { useState } from "react";

const TodoFrom = ({ addTodo }) => {

    const [ userInput , setUserInput ] = useState("")

    const handleChange = e => {
        const { value } = e.target
        console.log(value)
        setUserInput(value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (userInput.trim() !== "") {
            addTodo(userInput)
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