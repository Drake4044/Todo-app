import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import Button from "./button";
import DropDownMenu from "./dropDownMenu";
import { useEffect, useRef, useState } from "react";

const NavBar = () => {

    const cookies = new Cookies()
    const userMail = cookies.get("userMail")
    const userId = cookies.get("userId")
    const refOne = useRef()

    const [ isMenu, setIsMenu ] = useState(false)
 
    useEffect(() => {
        document.addEventListener("click", handleClickOutSide, true)

        return () => {
            document.removeEventListener("click", handleClickOutSide, true)
        }
    },[])

    const handleClickOutSide = e => {
        if(!refOne.current.contains(e.target)) {
            setIsMenu(false)
        }
    }
    const cerrarSesion = () => {
        if(userMail) {
            cookies.remove("userId", { path: "/" })
            cookies.remove("userName", { path: "/" })
            cookies.remove("userMail", { path: "/" })
            window.location.href = "./"
        } else alert("Aun no estas logeado")
    }

    return (
        <div 
            class="flex items-center justify-around border-4 border-solid border-sky-800 border-t-0 border-r-0 border-l-0 bg-gradient-to-r from-cyan-200 to-cyan-700">
            <div className="logo">
                 <h1 class="font-bold" >SOY EL NAVBAR</h1>
            </div>
            <div 
            ref={refOne}
            class="flex items-center justify-around m-2 space-x-10 py-2 px-3 w-auto bg-gradient-to-r from-slate-200 to-teal-200 border-2 border-solid border-sky-800 rounded-lg" >
                {
                    userMail
                    ? <DropDownMenu userId={userId} cerrarSesion={cerrarSesion} setIsMenu={setIsMenu} isMenu={isMenu}  >
                            {userMail}
                        </DropDownMenu>
                    
                    : <Link to="/login" >
                            <Button>
                                Iniciar Sesion
                                </Button>
                        </Link>  
                }
            </div>
        </div>
    )
}

export default NavBar