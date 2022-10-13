import { GET_COURSES_CONTENTS } from "../constants/CourseContentConstants"

export const coursesContentReducer = (state = { courses_content: []}, action) =>{
    switch (action.type) {
        case GET_COURSES_CONTENTS:
          return{
            ...state,
            courses_content : action.payload
          }
        default:
            return state
    }
}