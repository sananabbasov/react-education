import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Route, Routes } from "react-router-dom"
import About from "../pages/About"
import Auth from "../pages/Auth"
import CourseDetail from "../pages/CourseDetail"
import Home from "../pages/Home"
import { GetByEmailAction } from "../redux/actions/AuthActions"
import CreateCourse from "../pages/CreateCourse"

function MyRouter() {
  
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<CourseDetail />} />
        <Route path="/Auth/" element={<Auth />} />
        <Route path="/createcourse/" element={<CreateCourse />} />
    </Routes>
  )
}

export default MyRouter