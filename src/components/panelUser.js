import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUser, getUserTodos } from "../redux/acctions"
import { Link, useParams } from "react-router-dom"
import Button from "./button"
import EditUser from "./editUser"
import PerfilUser from "./perfilUser"
import Modal from "./modal"

const  PanelUser = () => {

    const [ user, setUser ] = useState({
        id: "",
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

            <div class="flex justify-end items-center -translate-x-14 translate-y-24" >
                <Link to="/" >
                    <Button hover="hover:-translate-x-2" >SALIR</Button>
                </Link>
            </div>

            <div class="flex justify-start items-center translate-x-16 translate-y-14 border-solid border-sky-700 border-4 rounded-lg pl-2 w-60 mt-2" >
                    <h1 class="text-2xl text-sky-700 font-bold" >Perfil de Usuario: </h1>
            </div>
            <div class=" flex justify-around items-center pt-10 pb-10 px-40 mr-10 ml-10 mb-10 rounded-xl bg-gradient-to-r from-cyan-200 to-cyan-700  border-solid border-sky-700 border-4" >
                {
                    isEdit 
                    ? <EditUser setIsEdit={setIsEdit} isEdit={isEdit} />
                    : <PerfilUser user={user} setIsEdit={setIsEdit} isEdit={isEdit}/>
                    
                }
                <div class="flex flex-col border-solid border-sky-700 border-4 rounded-lg w-72 p-1 ml-0 " >
                    <h1 class="text-xl text-sky-700 font-bold" >Todos: </h1>
                    {storeTodos?.map( todo => <li class="text-sky-700 font-bold underline " key={todo.id} >{todo.task}</li> )}
                </div>
            </div>
        </div>
    )
}

export default PanelUser