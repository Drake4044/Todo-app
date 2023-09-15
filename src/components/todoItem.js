import React, { useState } from "react";
import { completeTodo, deleteTodo, editTodo, getUserTodos } from "../redux/acctions";
import { useDispatch } from "react-redux";
import Cookies from "universal-cookie";
import Button from "./button";
import EditTodo from "./editTodo";


const TodoItem = ({ todo }) => {

    const [ isEdit , setIsEdit ] = useState(false)

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

    const style = todo.complete ? "line-through" : "no-underline"

    return (
        <div class={`${style} space-x-6 py-1 m-1 flex items-center justify-around rounded-lg border-2 border-solid border-sky-700`} >
            <input
                type="checkbox"
                checked= {todo.complete}
                onChange={todoComplete}
            />
            {
             isEdit
             ? <EditTodo setIsEdit={setIsEdit} todo={todo}/> 
             : <p class="text-base" >{todo.task}</p>
            }
            <div class="space-x-7" >
                <Button onClick={todoDelete}>
                    Eliminar
                </Button>
                <Button onClick={() => setIsEdit(!isEdit)} >
                    Editar
                </Button>
            </div>
        </div>
    )

}

export default TodoItem