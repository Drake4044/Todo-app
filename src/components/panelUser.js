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
        <div class="grid bg-gradient-to-r from-slate-200 to-teal-200 h-screen">

            <div class=" flex justify-around items-center pt-10 pb-10 px-40 m-2 rounded-xl bg-gradient-to-r from-cyan-200 to-cyan-700  border-solid border-sky-700 border-4 " >

                <div class="flex justify-end items-center absolute translate-x-[28rem] -translate-y-[16rem] " >
                    <Link to="/" >
                        <Button hover="hover:-translate-x-2 hover:text-white" >SALIR</Button>
                    </Link>
                </div>

                <div class="flex justify-start items-center border-solid border-sky-700 border-4 rounded-lg pl-2 w-60 mt-2 -translate-x-[20rem] -translate-y-[16rem] absolute" >
                        <h1 class="text-2xl text-sky-700 font-bold" >Perfil de Usuario: </h1>
                </div>

                {
                    isEdit 
                    ? <EditUser setIsEdit={setIsEdit} isEdit={isEdit} />
                    : <PerfilUser user={user} setIsEdit={setIsEdit} isEdit={isEdit}/>
                    
                }
                <div class="flex flex-col bg-gradient-to-r from-cyan-200 to-cyan-600 border-solid border-sky-700 border-4 rounded-lg w-72 p-1 ml-0 " >
                    <h1 class="text-xl text-sky-700 font-bold" >Todos: </h1>
                    {storeTodos?.map( todo => <li class="text-sky-700 font-bold underline " key={todo.id} >{todo.task}</li> )}
                </div>
            </div>
        </div>
    )
}

export default PanelUser