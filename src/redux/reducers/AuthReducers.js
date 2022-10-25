import { GET_USER_BY_EMAIL } from "../constants/AuthConstants";

export const AuthReducers = (state = { user: [] }, action) => {
    switch (action.type) {
        case GET_USER_BY_EMAIL:
            return {
                ...state,
                user: action.payload
            }

        default:
           return state
    }
}