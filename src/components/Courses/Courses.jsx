import React, { useEffect } from 'react'
import "../Courses/courses.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CourseCard from '../CourseCard/CourseCard';
import { useDispatch, useSelector } from 'react-redux';
import { getCoursesAction } from '../../redux/actions/CourseActions';
import { getCoursesContentsAction } from '../../redux/actions/CourseContentActions';
function Courses({ catId, courseName }) {
    const { courses_content } = useSelector((state) => state.courses_content)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCoursesContentsAction())
    }, [])

    console.log(catId)

    return (
        <div>
            <h1>{courseName}</h1>
            <Swiper
                spaceBetween={0}
                slidesPerView={6}
            >
                {
                    courses_content&&
                    courses_content.filter(x=>x.id == catId).map((course, index) => (
                        <SwiperSlide key={index}>
                            <CourseCard contentName={course.courseName} coursePhoto={course.photoUrl} courseAuhtor={course.authorName} />
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    )
}

export default Courses