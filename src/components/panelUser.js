import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUser, getUserTodos } from "../redux/acctions"
import { Link, useParams } from "react-router-dom"
import Button from "./button"
import EditUser from "./editUser"
import PerfilUser from "./perfilUser"

const  PanelUser = () => {

    const [ user, setUser ] = useState({
        name: "",
        user: "",
        mail: ""
    })

    const [ isEdit, setIsEdit ] = useState(false)

    const { id } = useParams()
    const dispatch = useDispatch()

    const storeUser = useSelector( state => state.user )
    const storeTodos = useSelector( state => state.todos )

    useEffect( () => {
        dispatch(getUser(id))
        dispatch(getUserTodos(id))
    },[dispatch, id])

    useEffect( () => {
        setUser(storeUser)
    },[storeUser])


    return(
        <div class="bg-sky-100 grid place-content-center min-h-screen">
            <div class="flex justify-end items-center -translate-x-14 translate-y-12" >
                <Link to="/" >
                    <Button>SALIR</Button>
                </Link>
            </div>
            <div class=" flex justify-around pt-10 pb-10 px-40 mr-10 ml-10 mb-10 rounded-xl bg-gradient-to-r from-cyan-200 to-cyan-700  border-solid border-sky-700 border-4" >
                {
                    isEdit 
                    ? <EditUser setIsEdit={setIsEdit} isEdit={isEdit} />
                    : <PerfilUser user={user} setIsEdit={setIsEdit} isEdit={isEdit} />
                }
                <div class="flex flex-col" >
                    <h1 class="text-xl text-sky-700 font-bold" >Todos: </h1>
                    {storeTodos?.map( todo => <li class="text-sky-700 font-bold" key={todo.id} >{todo.task}</li> )}
                </div>
            </div>
        </div>
    )
}

export default PanelUser