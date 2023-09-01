import React from "react";
import "./navBar.css"
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

const NavBar = () => {

    const cookies = new Cookies()
    const userMail = cookies.get("userMail")
    

    const cerrarSesion = () => {
        cookies.remove("userId", { path: "/" })
        cookies.remove("userName", { path: "/" })
        cookies.remove("userMail", { path: "/" })
        window.location.href = "./"
    }


    return (
        <div className="navbar">
            <div className="logo">
                 <h1>SOY EL NAVBAR</h1>
            </div>
            <div className="login">
                {
                userMail
                ? <h2>{userMail}</h2>
                : <Link to="/login" >
                    <button>Iniciar Sesion</button>
                </Link>     
                }
                <button onClick={cerrarSesion} >Cerrar Sesion</button>
            </div>
        </div>
    )
}

export default NavBar