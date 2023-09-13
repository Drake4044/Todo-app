import React, { useState } from "react";
import "./register.css"
import { Link } from "react-router-dom";
import { createUser } from "../redux/acctions";
import { useDispatch } from "react-redux";
import Button from "./button";
import Input from "./input";


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
        <div className="bg-sky-100 grid place-content-center min-h-screen">
            <div class="rounded-xl bg-gradient-to-r from-cyan-200 to-cyan-700 py-10 px-40 border-solid border-sky-700 border-4" >
                <form type="submit" class="flex items-center flex-col rounded-xl bg-gradient-to-r from-cyan-200 to-cyan-700 py-8 px-10 border-solid border-sky-700 border-4 space-y-6">
                    <div class="flex">
                        <Input
                            type="text"
                            name="name"
                            onChange={ handleChange }
                        >Nombre:</Input>
                        </div>
                    <div class="flex">
                        <Input
                            type="text"
                            name="user"
                            onChange={ handleChange }
                        >Usuario:</Input>
                        </div>
                    <div class="flex">
                        <Input
                            type="text"
                            name="mail"
                            onChange={ handleChange }
                            class="border-solid border-2 border-sky-700 rounded-md"
                        >Mail:</Input>
                        </div>
                    <div class="flex">
                        <Input
                            type="password"
                            name="password"
                            onChange={ handleChange }
                            class="border-solid border-2 border-sky-700 rounded-md"
                        >Contraseña:</Input>
                    </div>
                    <Button type="submit" onClick={crearUsuario} >Crear Usuario</Button>
                </form>
                <div class="flex items-center flex-col py-3 space-y-2">
                    <Link to="/" >
                        <Button>Volver al Menu</Button>
                    </Link>

                    <p>Ya estas registrado??</p>

                    <Link to="/login" >
                        <Button>Iniciar Sesion</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Register