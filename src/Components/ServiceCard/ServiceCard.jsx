import s from './ServiceCard.module.scss'
import React from 'react';


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