import { USER_TODO } from "../types";

const setUserTodo = (payload: string | number) => ({
    type: USER_TODO,
    payload
})

export default { setUserTodo };