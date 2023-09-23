import { useDispatch } from "react-redux"
import { deleteUser } from "../redux/acctions"
import Cookies from "universal-cookie"
import Modal from "./modal"
import { useState } from "react"
import Perfil from "./perfil"


const PerfilUser = ({ user, setIsEdit, isEdit })  => {

    const [ modal, setModal ] = useState(false)

    const dispatch = useDispatch()
    const cookies = new Cookies()
    const userId = cookies.get("userId")
    


    const onClick = async () => {
        await dispatch(deleteUser({ id: user.id }))
        cookies.remove("userId", { path: "/" })
        cookies.remove("userName", { path: "/" })
        cookies.remove("userMail", { path: "/" })
        window.location.href = "../"
    }

    return(
        <div>
            {
                modal 
                ? <div>
                    <Perfil user={user} isEdit={isEdit} setIsEdit={setIsEdit} setModal={setModal} />
                    <Modal setModal={setModal} onClick={onClick} />
                  </div>
                : <Perfil user={user} isEdit={isEdit} setIsEdit={setIsEdit} setModal={setModal} />   
            }
             
        </div>
        
    )
}

export default PerfilUser