import { useState } from "react";
import { loginUser } from "../redux/acctions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import Button from "./button";
import { BsEye, BsEyeSlash } from "react-icons/bs";


const Login = () => {

    const [ login, setLogin ] = useState({
        mail: "",
        password: ""
    })

    const [ passInput, setPassInput ] = useState(false)
    const passwordInput = document.getElementById("password")

    const dispatch = useDispatch()

    const coockies = new Cookies()

    const handleChange = e => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }

    const onClick = () => {
        setPassInput(!passInput)
        if(passwordInput.type === "password") {
            passwordInput.type = "text"
        } else {
            passwordInput.type = "password"
        }
    }

    const iniciarSesion = async e => {
        e.preventDefault()
        const userLoged =  await dispatch(loginUser(login))
        if(userLoged) {
            coockies.set("userId", userLoged.id, { path: "/" })
            coockies.set("userName", userLoged.user, { path: "/" })
            coockies.set("userMail", userLoged.mail, { path: "/" })
        }
    }

    const classInput = "pl-1 pr-1 border-solid border-2 border-sky-700 rounded-md hover:border-amber-400 hover:duration-200 focus:outline-none focus:ring focus:ring-amber-400 focus:border-transparent"

    return (
        <div className="bg-sky-100 min-h-screen grid place-content-center">
            <div class="rounded-xl bg-gradient-to-r from-cyan-200 to-cyan-700 py-16 px-4 border-solid border-sky-700 border-4" >
                <form type="submit" class="flex space-x-3" >
                    <label class="text-sky-700 text-xl font-bold" >Mail: </label>
                    <input
                        type="text"
                        name="mail"
                        onChange={ handleChange }
                        class={classInput}
                    />
                    <label class="text-sky-700 text-xl font-bold" >Contraseña: </label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        onChange={ handleChange }
                        class={classInput}
                    />
                    <div class="flex items-center justify-center text-lg text-sky-700 -translate-x-[2px]" >
                        {
                           !passInput
                           ? <button onClick={onClick}  class="hover:border-amber-500 duration-100 bg-cyan-500 h-full border-sky-700 border-solid border-2 rounded-md p-1  active:border-amber-200" type="button" >
                               <BsEyeSlash/>
                               </button>
                           : <button  onClick={onClick}  class="hover:border-amber-500 duration-100 bg-cyan-500 h-full border-sky-700 border-solid border-2 rounded-md p-1  active:border-amber-200" type="button" >
                               <BsEye/>
                               </button>
                        }
                    </div>
                    

                    <Button type="submit" onClick={iniciarSesion} >Iniciar Sesion</Button>
                </form>  
                <div class="flex justify-center my-3 peer" >
                <Link to="/register" >
                    <p class="m-3 text-sky-700 font-bold animate-bounce hover:text-amber-400 duration-200" >No estas registrado?</p>
                </Link>
                </div>       
                <div class="flex justify-evenly peer-hover:text-amber-400 duration-200">
                    <Link to="/register" >
                        <Button hover="peer-hover:text-amber-400 duration-200 peer-hover:scale-75" >Registrarse</Button>
                    </Link>
                    <Link to="/" >
                        <Button>Volver al Menu</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login