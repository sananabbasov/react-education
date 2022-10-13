import { GET_COURSES, GET_COURSES_BY_ID } from "../constants/CourseConstants";

export const courseReducer = (state = { courses: [] }, action) => {
    switch (action.type) {
        case GET_COURSES:
            return {
                ...state,
                courses: action.payload
            }
        case GET_COURSES_BY_ID:
            return {
                ...state,
                courses: action.payload
            }
        default:
            return state;
    }
}