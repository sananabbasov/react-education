import { BASE_URL } from "../../config/api"
import { GET_COURSES } from "../constants/CourseConstants"

export const getCoursesAction = () => async (dispatch,getState) =>{

    let courses = await (await fetch(`${BASE_URL}/course/getall`)).json()

    dispatch({
        type: GET_COURSES,
        payload: courses.data
    })
}

