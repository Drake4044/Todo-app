import React from "react";
import { completeTodo, deleteTodo } from "../redux/acctions";
import { useDispatch } from "react-redux";

const TodoItem = ({ todo }) => {

    const getStyle = () => {
        return {
          textDecoration: todo.complete ? "line-through" : "none",
          margin: "5px",
          padding: "5px",
          marginBottom: "-4px",
        };
      };

    const dispatch = useDispatch()

    const todoComplete = id => {
        dispatch(completeTodo(id))
    }

    const todoDelete = id => {
        dispatch(deleteTodo(id))
    }

    return (
        <div style={getStyle()}>
            <input
                type="checkbox"
                checked= {todo.complete}
                onChange={() => todoComplete(todo.id)}
            />
            {todo.task}
            <button onClick={() => todoDelete(todo.id)}>
                X
            </button>
        </div>
    )

}

export default TodoItem