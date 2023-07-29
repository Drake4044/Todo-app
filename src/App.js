import { useState } from "react";
import data from "./data.json";
import Todo from "./components/todo";
import "./App.css"
import TodoFrom from "./components/todoForm";


function App() {

  const [ todos, setTodos ] = useState(data)



  const addTodo = newTodo => {
      let newItem = {
        id: todos[todos.length-1].id + 1, // siempre el siguiente numero del ultimo id, esto evita que se dupliquen ids al eliminarlos.
        task: newTodo,
        complete: false
      }

      setTodos([ ...todos, newItem ])
  }

  const completeTodo = id => {
    setTodos(
      todos.map( todo => {
        return todo.id === id
        ? {...todo, complete: !todo.complete} // cambia al opuesto
        : {...todo}
      })
      
    )
  }

  const deleteTodo = id => {
    setTodos([...todos].filter( todo => todo.id !== id ))
  }

  return (
    <div className="container">
        <h1>Todo App</h1>
        <TodoFrom addTodo={ addTodo } />
        <Todo 
        todos={ todos }
        deleteTodo={ deleteTodo }
        completeTodo= { completeTodo }
        />
    </div>
  );  
}

export default App;
