import React from "react";
import { completeTodo, deleteTodo, getUserTodos } from "../redux/acctions";
import { useDispatch } from "react-redux";
import Cookies from "universal-cookie";

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
    const cookies = new Cookies()
    const userId = cookies.get("userId")

    const todoComplete = async () => {
        await dispatch(completeTodo(userId, todo.task))
        dispatch(getUserTodos(userId))
    }

    const todoDelete = async () => {
        await dispatch(deleteTodo(userId, todo.task))
        dispatch(getUserTodos(userId))
    }

    return (
        <div style={getStyle()}>
            <input
                type="checkbox"
                checked= {todo.complete}
                onChange={todoComplete}
            />
            {todo.task}
            <button onClick={todoDelete}>
                X
            </button>
        </div>
    )

}

export default TodoItem