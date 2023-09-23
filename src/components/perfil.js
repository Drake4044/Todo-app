import Button from "./button"

const Perfil = ({ user, isEdit, setIsEdit, setModal }) => {

    const buttonWarning = "hover:from-red-100 hover:to-red-500 hover:text-red-800"
    const buttonAlert = "hover:from-yellow-100 hover:to-yellow-500 hover:text-yellow-800"

    return (
        <div class="flex flex-col justify-around p-10 pt-2 pl-6 pr-5 -translate-x-40 space-y-10" >
            <div>
                <div class="flex justify-start items-center p-5 " >
                    <h1 class="text-xl pr-3 text-sky-700 font-bold -translate-x-5 " >Nombre: </h1>
                    <h2 class="text-xl text-sky-700 font-bold w-44 -translate-x-3 " >{user.name}</h2>
                </div>
                <div class="flex justify-start items-center p-5 " >
                    <h1 class="text-xl pr-4 text-sky-700 font-bold -translate-x-4" >Usuario: </h1>
                    <h2 class="text-xl text-sky-700 font-bold w-44 -translate-x-3" >{user.user}</h2>
                </div>
                <div class="flex justify-start items-center p-5 translate-x-8" >
                    <h1 class="text-xl text-sky-700 font-bold pr-4 -translate-x-4" >Mail: </h1>
                    <h2 class="text-xl text-sky-700 font-bold w-44 -translate-x-3" >{user.mail}</h2>
                </div>
                <div class="flex justify-around items-center" >
                    <Button hover={buttonAlert} onClick={() => setIsEdit(!isEdit)} >Editar Usuario</Button>
                    <Button hover={buttonWarning} onClick={() => setModal(true)}  >Borrar Usuario</Button>
                </div>
            </div>
        </div>
    )
}

export default Perfil