import s from './serviceCard.module.scss'
import React, { useRef, useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import './ServiceCard.css'
import slide1 from '../../assets/slider1.png'
import slide2 from '../../assets/slider2.png'
import slide3 from '../../assets/slider3.png'
import slide4 from '../../assets/slider4.png'
import profile1 from '../../assets/profileImg1.png'
import profile2 from '../../assets/profileImg2.png'
import profile3 from '../../assets/profileImg3.png'

const ServiceCard = () => {
    const userSlide = [
        {
            id: 1,
            img: slide1,
            avatar: profile1,
            name: 'Максим Фролов'
        },
        {
            id: 2,
            img: slide2,
            avatar: profile2,
            name: 'Михаил Баринов'
        },
        {
            id: 3,
            img: slide3,
            avatar: profile2,
            name: 'Максим Фролов'
        },
        {
            id: 4,
            img: slide4,
            avatar: profile3,
            name: 'Александр Громов'
        }
    ]
    return (
        <>
            <div id='container'>
                <div className={s.content}>
                    <h1>Наши лучшие исполнители</h1>
                    <div className={s.performers_slider}>
                        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                            {userSlide.map((user) => (
                                <SwiperSlide>
                                    <img src={user.img} alt="slide" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className={s.under_slider}>
                            {userSlide.map((user) => (
                                <span>{user.name}</span>
                            ))}
                            <button><a href="#">Перейти в портфолио</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceCard;