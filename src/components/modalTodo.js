import Button from "./button"

const ModalTodo = ({ todoDelete, setModal }) => {

    const buttonWarning = "hover:from-red-100 hover:to-red-500 hover:text-red-800"
    const buttonFocus = "hover:from-green-100 hover:to-green-500 hover:text-green-800"

    return (
        <div class="flex justify-evenly items-center rounded-lg border-sky-700 border-2 border-solid absolute bg-gradient-to-r from-red-100 to-red-500 bg-opacity-80 w-[615px] h-[44px] -translate-x-3" >
            <h1 class="font-bold text-xl text-sky-700 translate-x-10" >Seguro que deseas eliminarla?</h1>
            <div class="flex justify-evenly items-center translate-x-10 w-[225px]" >
                <Button hover={buttonWarning} onClick={todoDelete} >Eliminar</Button>
                <Button hover={buttonFocus} onClick={() => setModal(false)} >Salir</Button>
            </div>  
        </div>
    )
}

export default ModalTodo