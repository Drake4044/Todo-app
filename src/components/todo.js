import React from "react"
import TodoItem from "./todoItem"

const Todo = ({ todos, deleteTodo, completeTodo }) => {
    return (
        <div>
            {todos.map( ( item, index ) => (
                <TodoItem
                    key={`Todo ${index}`}
                    todo={ item }
                    deleteTodo={ deleteTodo }
                    completeTodo= { completeTodo }
                />
            )) }
        </div>
    )
}

export default Todo