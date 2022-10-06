import React from 'react'
import "../Courses/courses.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CourseCard from '../CourseCard/CourseCard';
function Courses({courseName}) {
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