
const todosPrueba = [{
    id: 1,
    task: "ir de compras",
    complete: false
  }, 
  {
    id: 2,
    task: "lavar carro",
    complete: false
  }, 
  {
    id: 3,
    task: "cocinar",
    complete: true
  }, 
  {
    id: 4,
    task: "lavar la ropa",
    complete: false
}]

// const  llamado = async () => {
//     const url = await fetch("http://localhost:3001/todos")
//     .then( data => data.json())
//     console.log(url); 
//     return url
// }


// llamado()

// const userInput = "coca"

// const findTask = () => {
//     const values = []
//     todosPrueba.forEach( todo => values.push(todo.task))
//     return values
// }

// const task = findTask()

// const map = todosPrueba.map( todo => todo.task)

// const valores = Object.values(todosPrueba)
// const condicional = findTask().includes(userInput)

// console.log(map)
// console.log(valores)
// console.log(task)

const string = "tarea nueva"

console.log(string.slice(0,1).toUpperCase());
console.log(`${string.charAt(0).toUpperCase()}${string.slice(1)}`);
