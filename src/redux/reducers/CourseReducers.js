import { GET_COURSES } from "../constants/CourseConstants";

export const courseReducer = (state = { courses: [] }, action) => {
    switch (action.type) {
        case GET_COURSES:
            return {
                ...state,
                courses: action.payload
            }
        default:
            return state;
    }
}