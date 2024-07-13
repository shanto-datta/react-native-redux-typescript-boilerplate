import appReducer from "../reducers";

export type Action = {
    type: string,
    payload: any
}

export const USER_TODO = 'USER_TODO';

export type State = ReturnType<typeof appReducer>;