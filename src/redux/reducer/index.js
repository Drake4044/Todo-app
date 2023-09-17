import { GET_USER, GET_USER_TODOS } from "../acctions"

const initialState =  {
    todos: [],
    user: {}
}


const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_USER_TODOS:
            return {
                ...state,
                todos: action.payload
            }
        case GET_USER:
            return {
                ...state,
                user: action.payload
            }
        default: return {...state}
    }
}

export default rootReducer