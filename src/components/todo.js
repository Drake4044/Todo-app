import React from "react"
import TodoItem from "./todoItem"

const Todo = ({ todos }) => {
    return (
        <div>
            {todos.map( ( item, index ) => (
                <TodoItem
                    key={`Todo ${index}`}
                    todo={ item }
                />
            )) }
        </div>
    )
}

export default Todo