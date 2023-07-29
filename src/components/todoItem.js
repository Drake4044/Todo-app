import React from "react";

const TodoItem = ({ todo, deleteTodo, completeTodo }) => {

    const getStyle = () => {
        return {
          textDecoration: todo.complete ? "line-through" : "none",
          margin: "5px",
          padding: "5px",
          marginBottom: "-4px",
        };
      };

    return (
        <div style={getStyle()}>
            <input
                type="checkbox"
                checked= {todo.complete}
                onChange={() => completeTodo(todo.id)}
            />
            {todo.task}
            <button onClick={() => deleteTodo(todo.id)}>
                X
            </button>
        </div>
    )

}

export default TodoItem