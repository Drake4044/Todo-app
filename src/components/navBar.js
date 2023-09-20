import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import Button from "./button";

const NavBar = () => {

    const cookies = new Cookies()
    const userMail = cookies.get("userMail")
    const userId = cookies.get("userId")
    

    const cerrarSesion = () => {
        if(userMail) {
            cookies.remove("userId", { path: "/" })
            cookies.remove("userName", { path: "/" })
            cookies.remove("userMail", { path: "/" })
            window.location.href = "./"
        } else alert("Aun no estas logeado")
    }

    const loginClass = "flex items-center justify-around m-2 space-x-10 py-2 px-3 w-auto bg-emerald-100 border-2 border-solid border-sky-800 rounded-lg"


    return (
        <div class="flex items-center justify-around border-4 border-solid border-sky-800  bg-gradient-to-r from-cyan-200 to-cyan-700 ">
            <div className="logo">
                 <h1 class="font-bold" >SOY EL NAVBAR</h1>
            </div>
            {
                userMail
                ? <div class={`${loginClass}`}>
                    <Link to={`/user/${userId}`}     >
                        <h2 class="text-lg font-bold text-sky-700" >{userMail}</h2>
                    </Link>
                    <Button onClick={cerrarSesion} >Cerrar Sesion</Button>                      
                </div>
                : <div class={`${loginClass}`}>
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