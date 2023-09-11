import React, { useState } from "react";
import "./login.css"
import { loginUser } from "../redux/acctions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";


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
        <div className="panelLogin">
            <form type="submit">
                <label>Mail: </label>
                <input
                    type="text"
                    name="mail"
                    onChange={ handleChange }
                />
                <label>Contraseña: </label>
                <input
                    type="password"
                    name="password"
                    onChange={ handleChange }
                />
                <button type="submit" onClick={iniciarSesion} >Iniciar Sesion</button>
            </form>

            <p>No estas registrado?</p>

            <Link to="/register" >
                <button>Registrarse</button>
            </Link>
            <Link to="/" >
                <button>Volver al Menu</button>
            </Link>
        </div>
    )
}

export default Login