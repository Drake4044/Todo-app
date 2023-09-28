import { useEffect, useRef, useState } from "react";
import { completeTodo, deleteTodo, getUserTodos } from "../redux/acctions";
import { useDispatch } from "react-redux";
import Cookies from "universal-cookie";
import Button from "./button";
import EditTodo from "./editTodo";
import ModalTodo from "./modalTodo";


const TodoItem = ({ todo }) => {

    const [ isEdit , setIsEdit ] = useState(false)
    const [ modal, setModal ] = useState(false)

    const dispatch = useDispatch()
    const cookies = new Cookies()
    const userId = cookies.get("userId")

    const refOne = useRef()

    useEffect(() => {
        document.addEventListener("click", handleClickOutSide, true)

        return () => {
            document.removeEventListener("click", handleClickOutSide, true)
        }
    },[])


    const handleClickOutSide = e => {
        if(!refOne.current.contains(e.target)) {
            setIsEdit(false)
        }
    }   

    const todoComplete = async () => {
        await dispatch(completeTodo(userId, todo.task))
        dispatch(getUserTodos(userId))
    }

    const todoDelete = async () => {
        await dispatch(deleteTodo(userId, todo.task))
        await dispatch(getUserTodos(userId))
        await setModal(false)
    }


    const style = todo.complete ? "line-through border-lime-600" : "no-underline border-sky-700"

    return (
        <div class={`${style} hover:border-amber-400 hover:-translate-y-1 duration-75 space-x-6 py-1 m-1 flex items-center justify-around rounded-lg border-2 border-solid `} >
            <input
                class="accent-lime-600"
                type="checkbox"
                checked= {todo.complete}
                onChange={todoComplete}
            />
            <div ref={refOne} >
                {
                 isEdit
                 ? <EditTodo setIsEdit={setIsEdit} todo={todo} /> 
                 : <p class="text-base" >{todo.task}</p>
                }
            </div>
            
            <div class="space-x-7" >
                <Button onClick={() => setModal(true)}>
                    Eliminar
                </Button>
                <Button onClick={() => setIsEdit(true)} >
                    Editar
                </Button>
            </div>
            {
               modal && <ModalTodo todoDelete={todoDelete} setModal={setModal} />
            }
        </div>
    )

}

export default TodoItem