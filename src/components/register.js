import React, { useState } from "react";
import "./register.css"
import { Link } from "react-router-dom";
import { createUser } from "../redux/acctions";
import { useDispatch } from "react-redux";


const Register = () => {
    
    const [ register, setRegister ] = useState({
        name: "",
        user: "",
        mail: "",
        password: ""
    })

    const dispatch = useDispatch()

    const handleChange = e => {
        setRegister({
            ...register,
            [e.target.name]: e.target.value
        })
    }

    const crearUsuario = e => {
        e.preventDefault()
        dispatch(createUser(register))
    }

    return(
        <div className="register">
            <form type="submit" className="inputsBox">
                <label>Nombre: </label>
                <input
                    type="text"
                    name="name"
                    onChange={ handleChange }
                />
                <label>Usuario: </label>
                <input
                    type="text"
                    name="user"
                    onChange={ handleChange }
                />
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
                <button type="submit" onClick={crearUsuario} >Crear Usuario</button>
            </form>
            <Link to="/" >
                <button>Volver al Menu</button>
            </Link>

            <p>Ya estas registrado??</p>

            <Link to="/login" >
                <button>Iniciar Sesion</button>
            </Link>
        
        </div>
    )
}

export default Register