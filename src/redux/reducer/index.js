import { COMPLETE_TODO, GET_ALL_TODOS, DELETE_TODO } from "../acctions"

const initialState =  {
    todos: []
}


const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_TODOS:
            return {
                ...state,
                todos: action.payload
            }
        case COMPLETE_TODO:
            return {
                ...state,
                todos: state.todos.map( todo => 
                    todo.id === action.payload
                    ? {...todo, complete: !todo.complete} // cambia al opuesto
                    : {...todo}
                )
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter( todo => todo.id !== action.payload )
            }
        default: return {...state}
    }
}

export default rootReducer