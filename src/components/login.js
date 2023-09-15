import React, { useState } from "react";
import "./login.css"
import { loginUser } from "../redux/acctions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import Button from "./button";


const Login = () => {

    const [ login, setLogin ] = useState({
        mail: "",
        password: ""
    })

    const dispatch = useDispatch()

    const coockies = new Cookies()

    const handleChange = e => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
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

    return (
        <div className="bg-sky-100 min-h-screen grid place-content-center">
            <div class="rounded-xl bg-gradient-to-r from-cyan-200 to-cyan-700 py-20 px-4 border-solid border-sky-700 border-4" >
                <form type="submit" class="flex space-x-3" >
                    <label class="text-sky-700 text-xl font-bold" >Mail: </label>
                    <input
                        type="text"
                        name="mail"
                        onChange={ handleChange }
                        class="border-solid border-2 border-sky-700 rounded-md "
                    />
                    <label class="text-sky-700 text-xl font-bold" >Contraseña: </label>
                    <input
                        type="password"
                        name="password"
                        onChange={ handleChange }
                        class="border-solid border-2 border-sky-700 rounded-md"
                    />
                    <Button type="submit" onClick={iniciarSesion} >Iniciar Sesion</Button>
                </form>  
                <div class="flex justify-center my-2" >
                    <p class="m-3 text-sky-700 font-bold animate-bounce" >No estas registrado?</p>
                </div>       
                <div class="flex py-1 justify-evenly">
                    <Link to="/register" >
                        <Button>Registrarse</Button>
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