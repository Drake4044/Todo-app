import { useEffect, useState } from "react";
import Todo from "./todo";
import { getUserTodos } from "../redux/acctions";
import { useDispatch, useSelector } from "react-redux";
import TodoFrom from "./todoForm";
import NavBar from "./navBar";
import Cookies from "universal-cookie";
import Button from "./button";


 const Langing = () => {

  const [ todos, setTodos ] = useState([])
  
  const dispatch = useDispatch()
  const cookies = new Cookies()
  const userLoged = cookies.get("userMail")
  const userId = cookies.get("userId")

  const serverTodos = useSelector( state => state.todos )

  useEffect( () => {
    dispatch(getUserTodos(userId))
  },[dispatch,userId])

  useEffect( () => {
    setTodos(serverTodos)
  },[serverTodos])

  const reloadTodos = () => {
    dispatch(getUserTodos(userId))
  }

  return (
    <div>
      <NavBar/>
      <div class="bg-[url(https://img.freepik.com/vector-gratis/vector-diseno-papel-blanco-blanco_53876-161340.jpg?w=740&t=st=1690332677~exp=1690333277~hmac=baa82cec763eacac4da462d7416ac7e44ece75fe79c0fa45857ef045638b43ed)] m-auto w-4/5 border-solid border-2 border-sky-700 my-5">
          {
             userLoged
             ?  <div class="flex justify-evenly items-center mt-9 m-7" >
                  <h1 class="text-3xl text-sky-700 font-bold" >Todo App</h1>
                  <Button onClick={reloadTodos} >Recargar</Button>
                </div>
            : <div class="flex items-center justify-center mt-9" >
                <h1 class="text-3xl text-sky-700 font-bold" >Todo App</h1>
              </div>
          }
          {
            !userLoged
            ? <div class="flex flex-col items-center m-3 mb-10 space-y-3 " >
                <h1 class="m-7 text-sky-700 text-xl font-bold" >No hay Tareas</h1>
                <p class="m-7 text-sky-700 text-xl font-bold animate-bounce" >Inicia sesion para agregar tareas!!</p>
              </div> 
            : !todos.length
            ? <div class="flex flex-col justify-center items-center" >
                <TodoFrom/>
                <h1 class="m-7 text-sky-700 text-xl font-bold" >Aun no tienes Tareas</h1>
              </div>
            :  <div class="grid px-12"> 
                <TodoFrom/>
                <Todo todos={ todos }/>
              </div>
          }
      </div>
    </div>
  );  
}

export default Langing;
