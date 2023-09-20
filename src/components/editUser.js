import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { editUser, getUser } from "../redux/acctions"
import Button from "./button"

const EditUser = ({ setIsEdit, isEdit }) => {

    const [ user, setUser ] = useState({
        id: "",
        name: "",
        user: "",
        mail: ""
    })

    const dispatch = useDispatch()
    const storeUser = useSelector( state => state.user )

    useEffect( () => {
        setUser({
            ...user,
            id: storeUser.id,
        })
    },[storeUser])

    useEffect( () => {
        return () => {
            dispatch(getUser(storeUser.id))
        }
    },[])

    const handleChange = e => {
        const newData = e.target.value
        setUser({
            ...user,
            [e.target.name]: newData
        })
    }

    const onSubmit = async e => {
        e.preventDefault()
        if( user.name === "" && user.user === "" && user.mail === "" ) {
            setIsEdit(!isEdit)
        } else {
            await dispatch(editUser(user))
            setIsEdit(!isEdit)
        }
    }

    const buttonAlert = "hover:from-yellow-100 hover:to-yellow-500 hover:text-yellow-800"


    return(
        <div class="flex flex-col justify-around p-10 pt-2 pl-1 pr-6 -translate-x-40 space-y-10" >
            <form onSubmit={onSubmit} >
                <div class="flex justify-start items-center p-5">
                    <h1 class="text-xl pr-5 text-sky-700 font-bold" >Nombre: </h1>
                    <input 
                        value={user.name}
                        placeholder={user.name}
                        name="name"
                        onChange={handleChange}
                        class={`border-solid border-2 border-sky-700 rounded-md`}
                    />
                </div>
                <div class="flex justify-start items-center p-5 translate-x-1">
                    <h1 class="text-xl pr-5 text-sky-700 font-bold" >Usuario: </h1>
                    <input 
                        value={user.user}
                        placeholder={user.user}
                        name="user"
                        onChange={handleChange}
                        class={`border-solid border-2 border-sky-700 rounded-md`}
                    />
                </div>
                    
                <div class="flex justify-start items-center p-5 translate-x-9">
                    <h1 class="text-xl pr-5 text-sky-700 font-bold" >Mail: </h1>
                    <input 
                        value={user.mail}
                        placeholder={user.mail}
                        name="mail"
                        onChange={handleChange}
                        class={`border-solid border-2 border-sky-700 rounded-md`}
                    />
                </div>
                <div class="flex justify-around items-center">
                    <Button hover={buttonAlert}  type="submit">Editar Usuario</Button>
                </div>  
            </form>
        </div>
    )
}

export default EditUser