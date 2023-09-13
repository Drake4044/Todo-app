import React from "react";
import "./navBar.css"
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import Button from "./button";

const NavBar = () => {

    const cookies = new Cookies()
    const userMail = cookies.get("userMail")
    

    const cerrarSesion = () => {
        if(userMail) {
            cookies.remove("userId", { path: "/" })
            cookies.remove("userName", { path: "/" })
            cookies.remove("userMail", { path: "/" })
            window.location.href = "./"
        } else alert("Aun no estas logeado")
    }


    return (
        <div className="navbar">
            <div className="logo">
                 <h1>SOY EL NAVBAR</h1>
            </div>
            {
                userMail
                ? <div className="login">
                    <h2>{userMail}</h2>
                    <Button onClick={cerrarSesion} >Cerrar Sesion</Button>                      
                </div>
                : <div className="login">
                    <Link to="/login" >
                        <Button>
                            Iniciar Sesion
                            </Button>
                    </Link>  
                </div>   
            }
        </div>
    )
}

export default NavBar