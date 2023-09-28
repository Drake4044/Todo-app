import { useState } from "react"
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai"
import { FiSettings } from "react-icons/fi"
import { BiLogOut } from "react-icons/bi"
import { Link } from "react-router-dom"

const DropDownMenu = ({ children, cerrarSesion, userId, isMenu, setIsMenu }) => {

    return (
        <div class="w-[300px]" >
            <button
                class="bg-gradient-to-r from-teal-100 to-teal-500 text-sky-700 border-2 border-sky-700 p-4 w-full h-[45px] flex items-center justify-between font-bold rounded-lg tracking-widest active:text-white hover:text-yellow-400 duration-200 active:translate-y-1"
                onClick={() => setIsMenu(!isMenu)}
            >
            {children}
            {
                isMenu
                ? <AiOutlineCaretUp />
                : <AiOutlineCaretDown />
            } 
            </button>
            {
                isMenu && (
                <div class="flex flex-col absolute w-[300px] bg-gradient-to-r from-teal-100 to-teal-500 border-2 border-sky-700 rounded-lg mt-1 p-1" >
                    <Link to={`/user/${userId}`} >
                        <button 
                        class="flex items-center justify-between text-sky-700 font-bold tracking-[2px] pr-2 w-full hover:text-white hover:bg-teal-600 hover:font-bold duration-100 pl-2 rounded-lg active:text-amber-400 active:translate-y-1 " >
                            Perfil
                            <FiSettings/>
                        </button>
                    </Link>
                    
                    <button 
                        class="flex items-center justify-between text-sky-700 font-bold tracking-[2px] pr-[10px] w-full hover:text-white hover:bg-teal-600 hover:font-bold duration-100 pl-2 rounded-lg active:text-amber-400 active:translate-y-1 "
                        onClick={cerrarSesion}>
                            Cerrar Sesion
                            <BiLogOut/>
                        </button>
                </div>
                )
            }
        </div>
    )
}

export default DropDownMenu