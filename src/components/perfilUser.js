import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUser, getUserTodos } from "../redux/acctions"
import { useParams } from "react-router-dom"

const  PerfilUser = () => {

    const [ user, setUser ] = useState({
        name: "",
        user: "",
        mail: ""
    })
    const { id } = useParams()
    const dispatch = useDispatch()

    const storeUser = useSelector( state => state.user )
    const storeTodos = useSelector( state => state.todos )

    useEffect( () => {
        dispatch(getUser(id))
        dispatch(getUserTodos(id))
    },[dispatch, id,])

    useEffect( () => {
        setUser(storeUser)
    },[storeUser])


    return(
        <div class="bg-sky-100 grid place-content-center min-h-screen">
            <div class=" flex justify-around pt-20 pb-20 rounded-xl bg-gradient-to-r from-cyan-200 to-cyan-700 py-10 px-40 border-solid border-sky-700 border-4" >
                <div class=" flex flex-col justify-around border-2  border-solid p-10 pt-2 pl-5 pr-5 -translate-x-40 space-y-10" >
                    <div class="flex justify-start items-center " >
                    <h1 class="text-xl pr-5 text-sky-700 font-bold" >Nombre: </h1>
                    <h2 class="text-xl text-sky-700 font-bold" >{user.name}</h2>
                    </div>
                    <div class="flex justify-start items-center " >
                        <h1 class="text-xl pr-5 text-sky-700 font-bold" >Usuario: </h1>
                        <h2 class="text-xl text-sky-700 font-bold" >{user.user}</h2>
                    </div>
                    <div class="flex justify-start items-center " >
                        <h1 class="text-xl pr-11 text-sky-700 font-bold" >Mail: </h1>
                        <h2 class="text-xl text-sky-700 font-bold" >{user.mail}</h2>
                    </div>

                </div>
                <div class="border-2 border-solid p-10 " >
                    <h1 class="text-xl text-sky-700 font-bold" >Todos: </h1>
                    {storeTodos?.map( todo => <li class="text-sky-700 font-bold" key={todo.id} >{todo.task}</li> )}
                </div>
            </div>
        </div>
    )
}

export default PerfilUser