import { Action, USER_TODO } from "../types";


const initialState = {
    userTodo: []
}

export default (state: any = initialState, action: Action) => {
    switch (action.type) {
        case USER_TODO:
            return Object.assign({}, state, {
                userTodo: action.payload,
            });
        default:
            return state
    }
}