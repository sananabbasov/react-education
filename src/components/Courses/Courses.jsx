import React, { useEffect } from 'react'
import "../Courses/courses.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CourseCard from '../CourseCard/CourseCard';
import { useDispatch, useSelector } from 'react-redux';
import { getCoursesAction } from '../../redux/actions/CourseActions';
function Courses({courseName}) {
    const {category} = useSelector((state) => state.category)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getCoursesAction())
    },[])

    return (
        <div>
            <h1>{courseName}</h1>
            <Swiper
                spaceBetween={0}
                slidesPerView={6}
            >
                <SwiperSlide>
                    <CourseCard />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Courses