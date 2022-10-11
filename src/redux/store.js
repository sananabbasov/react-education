import { applyMiddleware, combineReducers, createStore } from "@reduxjs/toolkit";
import { CourseCategoryReducer } from "./reducers/CourseCategoryReducers";
import { courseReducer } from "./reducers/CourseReducers";
const {default: thunk} = require("redux-thunk")

const reducers = combineReducers({
    courses: courseReducer,
    category: CourseCategoryReducer
})
const initialState = {
}
const middleware = [thunk]
const store = createStore(reducers,initialState,applyMiddleware(...middleware))
export default store;