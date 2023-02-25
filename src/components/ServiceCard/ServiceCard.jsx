import s from './serviceCard.module.scss'
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import slide1 from '../../assets/slider1.png'
import slide2 from '../../assets/slider2.png'
import slide3 from '../../assets/slider3.png'
import slide4 from '../../assets/slider4.png'

const ServiceCard = () => {

    return (
        <>
            <div id='container'>
                <div className={s.content}>
                    <h1>Наши лучшие исполнители</h1>
                    <div className={s.performers_slider}>

                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceCard;