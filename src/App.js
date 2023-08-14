import { useEffect, useState } from "react";
import Todo from "./components/todo";
import "./App.css"
import { getAllTodos } from "./redux/acctions";
import { useDispatch, useSelector } from "react-redux";
import TodoFrom from "./components/todoForm";


 const App = () => {

  const [ todos, setTodos ] = useState([])

  const dispatch = useDispatch()
  const serverTodos = useSelector( state => state.todos )

  useEffect( () => {
    dispatch(getAllTodos())
  },[dispatch])

  useEffect( () => {
    setTodos(serverTodos)
  },[serverTodos])

  const reloadTodos = () => {
    dispatch(getAllTodos())
  }


  const addTodo = newTodo => {
      let newItem = {
        id: todos[todos.length-1].id + 1, // siempre el siguiente numero del ultimo id, esto evita que se dupliquen ids al eliminarlos.
        task: newTodo,
        complete: false
      }
      setTodos([ ...todos, newItem ])
  }

  return (
    <div className="container">
      <div className="header">
        <h1>Todo App</h1>
        <button onClick={() => reloadTodos()} >X</button>
      </div>
        <TodoFrom addTodo={ addTodo } />
        <Todo todos={ todos }/>
    </div>
  );  
}

export default App;
