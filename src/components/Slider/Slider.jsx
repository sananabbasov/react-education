import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import '../Slider/slider.scss'
import 'swiper/css';
import CardContent from '../CardContent/CardContent';
function Slider({catName}) {
    return (
        <>
        <h1>{catName}</h1>
            <Swiper
                slidesPerView={5}
            >
                <SwiperSlide>
                    <CardContent  />
                </SwiperSlide>
                <SwiperSlide>
                    <CardContent />
                </SwiperSlide>
                <SwiperSlide>
                    <CardContent />
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Slider