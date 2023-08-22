import { useEffect, useState } from "react";
import Todo from "./components/todo";
import "./App.css"
import { addTodo, getAllTodos } from "./redux/acctions";
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
