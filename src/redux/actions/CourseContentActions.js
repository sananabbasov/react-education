import { BASE_URL } from "../../config/api"
import { GET_COURSES_CONTENTS } from "../constants/CourseContentConstants"

export const getCoursesContentsAction = () => async(dispatch,getState) =>{
    let courses = await (await fetch(`${BASE_URL}/course/getcoursecontent`)).json()
    dispatch({
        type: GET_COURSES_CONTENTS,
        payload: courses.data
    })
}
