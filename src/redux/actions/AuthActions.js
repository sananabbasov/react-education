import { BASE_URL } from "../../config/api"
import { GET_USER_BY_EMAIL } from "../constants/AuthConstants"
import { GET_COURSES_BY_ID } from "../constants/CourseConstants"


export const GetByEmailAction = () => async (dispatch, getState) => {
    let userToken = JSON.parse(localStorage.getItem("token"))

    let user = await (await fetch(`${BASE_URL}/user/getbyemail`,{
        method: "GET",
        headers: {
            "Authorization": `Bearer ${userToken}`
        }
    })).json()


    dispatch({
        type: GET_USER_BY_EMAIL,
        payload: user
    })
}