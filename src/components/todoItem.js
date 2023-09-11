import React, { useState } from "react";
import { completeTodo, deleteTodo, editTodo, getUserTodos } from "../redux/acctions";
import { useDispatch } from "react-redux";
import Cookies from "universal-cookie";

const TodoItem = ({ todo }) => {

    const [ isEdit , setIsEdit ] = useState(false)
    const [ todoToEdit , setTodoToEdit ] = useState({
        id: todo.id,
        task: todo.task
    })
 
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

    const handleChange = e => {
        setTodoToEdit({
            ...todoToEdit,
            task: e.target.value
        })
    }

    const onSubmit = async e => {
        e.preventDefault()
        await dispatch(editTodo(todoToEdit))
        await dispatch(getUserTodos(userId))
        setIsEdit(false)
    }

    return (
        <div style={getStyle()}>
            <input
                type="checkbox"
                checked= {todo.complete}
                onChange={todoComplete}
            />
            {
             isEdit
             ? <form onSubmit={onSubmit} >
                    <input 
                        value={todoToEdit.task}
                        onChange={handleChange}
                    /> 
                </form> 
             : todo.task
            }
           
            <button onClick={todoDelete}>
                X
            </button>
            <button onClick={() => setIsEdit(true)} >
                Editar
            </button>
        </div>
    )

}

export default TodoItem