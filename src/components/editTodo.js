import { useDispatch } from "react-redux"
import { editTodo, getUserTodos } from "../redux/acctions"
import { useState } from "react"
import Cookies from "universal-cookie"

const EditTodo = ({ todo, setIsEdit }) => {

    const [ todoToEdit , setTodoToEdit ] = useState({
        id: todo.id,
        task: todo.task
    })

    const cookies = new Cookies()
    const userId = cookies.get("userId")

    const dispatch = useDispatch()

    const handleChange = e => {
        const todo = e.target.value

        const finalTodo = `${todo.charAt(0).toUpperCase()}${todo.slice(1)}`
            
        setTodoToEdit({
            ...todoToEdit,
            task: finalTodo
        })
    }

    const onSubmit = async e => {
        e.preventDefault()
        await dispatch(editTodo(todoToEdit))
        await dispatch(getUserTodos(userId))
        if(todoToEdit.task.trim() !== ""){
            setIsEdit(false)
        }
    }

    return (
        <div>
            <form onSubmit={onSubmit} >
                    <input 
                        value={todoToEdit.task}
                        onChange={handleChange}
                        class="border-solid border-2 border-sky-700 rounded-md"
                    />
                </form> 
        </div>
    )
}

export default EditTodo