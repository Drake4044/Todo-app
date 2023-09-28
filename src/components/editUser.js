import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { editUser, getUser } from "../redux/acctions"
import { BsEye, BsEyeSlash } from "react-icons/bs"
import Button from "./button"

const EditUser = ({ setIsEdit, isEdit }) => {

    const [ user, setUser ] = useState({
        id: "",
        name: "",
        user: "",
        mail: "",
        password: ""
    })

    const [ passInput, setPassInput ] = useState(false)

    const dispatch = useDispatch()
    const storeUser = useSelector( state => state.user )
    const passwordInput = document.getElementById("password")

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
        if( user.name === "" && user.user === "" && user.mail === "" && user.password === "" ) {
            setIsEdit(!isEdit)
        } else  {
            await dispatch(editUser(user))
            setIsEdit(!isEdit)
        }
    }

    const onClick = () => {
        setPassInput(!passInput)
        if(passwordInput.type === "password") {
            passwordInput.type = "text"
        } else {
            passwordInput.type = "password"
        }
    }

    const buttonAlert = "hover:from-yellow-100 hover:to-yellow-500 hover:text-yellow-800"
    const classInput = "pl-2 border-solid border-2 border-sky-700 rounded-md hover:border-amber-400 duration-200 focus:outline-none focus:ring focus:ring-amber-400 focus:border-transparent"


    return(
        <div class="flex flex-col justify-around bg-gradient-to-r from-cyan-100 to-cyan-500 border-solid pb-5 ml-1 border-sky-700 border-4 rounded-lg -translate-x-40 space-y-10 w-96" >
            <form onSubmit={onSubmit} >
                <div class="flex justify-start items-center p-5">
                    <h1 class="text-xl pr-5 text-sky-700 font-bold" >Nombre: </h1>
                    <input 
                        value={user.name}
                        name="name"
                        onChange={handleChange}
                        class={classInput}
                    />
                </div>
                <div class="flex justify-start items-center p-5 translate-x-1">
                    <h1 class="text-xl pr-5 text-sky-700 font-bold" >Usuario: </h1>
                    <input 
                        value={user.user}
                        name="user"
                        onChange={handleChange}
                        class={classInput}
                    />
                </div>
                    
                <div class="flex justify-start items-center p-5 translate-x-9">
                    <h1 class="text-xl pr-5 text-sky-700 font-bold" >Mail: </h1>
                    <input 
                        value={user.mail}
                        name="mail"
                        onChange={handleChange}
                        class={classInput}
                    />
                </div>

                <div class="flex justify-start items-center p-5 -translate-x-3">
                    <h1 class="text-xl pr-5 text-sky-700 font-bold" >Password: </h1>
                    <input 
                        id="password"
                        value={user.password}
                        name="password"
                        type="password"
                        onChange={handleChange}
                        class={classInput}
                    />
                    <div class=" flex justify-end text-lg text-sky-700 pl-2">
                        {
                            !passInput
                            ? <button onClick={onClick} class="hover:border-amber-500 duration-100 bg-cyan-300 border-sky-700 border-solid border-2 rounded-md p-1 active:border-amber-200" type="button" >
                                <BsEyeSlash/>
                                </button>
                            : <button  onClick={onClick} class="hover:border-amber-500 duration-100 bg-cyan-300 border-sky-700 border-solid border-2 rounded-md p-1 active:border-amber-200" type="button" >
                                <BsEye/>
                                </button>
                        }
                    </div>
                </div>
                
                <div class="flex justify-around items-center">
                    <Button hover={buttonAlert} type="submit" onSubmit={onSubmit} >Editar Usuario</Button>
                </div>  
            </form>
        </div>
    )
}

export default EditUser