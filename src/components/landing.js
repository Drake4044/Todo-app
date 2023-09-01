import { useEffect, useState } from "react";
import Todo from "./todo";
import "./landing.css"
import { getUserTodos } from "../redux/acctions";
import { useDispatch, useSelector } from "react-redux";
import TodoFrom from "./todoForm";
import NavBar from "./navBar";
import Cookies from "universal-cookie";


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
    <div className="container">
      <NavBar/>
      <div className="panel">
        <div className="header">
          <h1>Todo App</h1>
          <button onClick={() => reloadTodos()} >X</button>
        </div>
          {
            !userLoged
            ? <div className="noTodos" >
                <h1>No hay Todos</h1>
              </div> 
            : !todos.length
            ? <div className="noTodos" >
                <TodoFrom/>
                <h1>Aun no tienes Todos</h1>
              </div>
            :  <div className="todos">
                <TodoFrom/>
                <Todo todos={ todos }/>
              </div>
          }
      </div>
    </div>
  );  
}

export default Langing;
