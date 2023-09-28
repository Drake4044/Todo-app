import Button from "./button"

const Modal = ({ setModal, onClick }) => {

    const buttonWarning = "hover:from-red-100 hover:to-red-500 hover:text-red-800"
    const buttonFocus = "hover:from-green-100 hover:to-green-500 hover:text-green-800 hover:shadow-lg hover:shadow-green-400"

    return (
        <div class="flex justify-center items-center w-screen h-screen fixed top-0 left-0 bg-black bg-opacity-40 transition-all duration-100">
            <div class="flex flex-col justify-center items-center w-2/4 h-44 bg-white rounded-md shadow-md shadow-slate-800 " >
                <h1 class="text-3xl text-sky-700 font-bold -translate-y-7" >Estas seguro?</h1>
                <p class="text-sky-700 font-bold -translate-y-5 " >Se eliminaran todos los datos del "usuario" y sus "tareas"</p>
            </div>
            <div class="absolute space-x-20 translate-y-10" >
                <Button hover={buttonWarning} onClick={onClick} >Borrar</Button>
                <Button hover={buttonFocus}  onClick={() => setModal(false)} >Salir</Button>
            </div>
            
        </div>
    )
}

export default Modal