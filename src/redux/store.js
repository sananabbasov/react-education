import { applyMiddleware, combineReducers, createStore } from "@reduxjs/toolkit";
import { AuthReducers } from "./reducers/AuthReducers";
import { CourseCategoryReducer } from "./reducers/CourseCategoryReducers";
import { courseReducer } from "./reducers/CourseReducers";
import { coursesContentReducer } from "./reducers/CoursesContentReducers";
const { default: thunk } = require("redux-thunk")

const reducers = combineReducers({
    courses: courseReducer,
    category: CourseCategoryReducer,
    courses_content: coursesContentReducer,
    user: AuthReducers
})

const initialState = {

}


const middleware = [thunk]
const store = createStore(reducers, initialState, applyMiddleware(...middleware))
export default store;