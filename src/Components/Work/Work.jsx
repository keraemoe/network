import React from 'react';
import s from './Work.module.scss'
import work1 from '../../Assets/work_img1.png'
import work2 from '../../Assets/work_img2.png'
import work3 from '../../Assets/work_img3.png'


const Work = () => {
    return (
        <>
            <div id='container'>
                <div className={s.work_content}>
                    <h1>Как работает сервис?</h1>
                    <div className={s.content_blocks}>
                        <div className={s.first_block}>
                            <h1>Опишите услугу</h1>
                            <p>
                                Опишите свою задачу и условия.
                                <br />
                                Это бесплатно и займёт 3‑4 минуты
                            </p>
                            <img src={work1} alt="" />
                        </div>
                        <div className={s.second_block}>
                            <h1>Получите отклики</h1>
                            <p>
                                Отклики с ценами от исполнителей.
                                <br />
                                Обычно они приходят в течение 30 минут
                            </p>
                            <img src={work2} alt="" />
                        </div>
                        <div className={s.third_block}>
                            <h1>Выберите исполнителя</h1>
                            <p>
                                Выберите подходящего исполнителя
                                <br />
                                и обсудите сроки выполнения
                            </p>
                            <img src={work3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Work;