import { GET_ALL_TODOS, GET_USER_TODOS } from "../acctions"

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
        case GET_USER_TODOS:
            return {
                ...state,
                todos: action.payload
            }
        default: return {...state}
    }
}

export default rootReducer