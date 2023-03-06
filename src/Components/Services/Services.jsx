import React from 'react';
import s from './Services.module.scss'
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import SectionPhoto from '../../Assets/SectionPhoto.png'

const Services = () => {
    return (
        <>
            <div id='container'>
                <div className={s.hero_content}>
                    <section className={s.firt_section}>
                        <h1>
                            Сервис подбора <br /> фрилансеров
                        </h1>
                        <p>Быстрый поиск исполнителей для ваших задач</p>
                        <div className={s.btn_container}>
                            <Input className={s.input_btn} size="large" placeholder="Чем Вам помочь?" prefix={<SearchOutlined />} />
                            <button className={s.search_btn}>Найти</button>
                        </div>
                    </section>
                    <section className={s.second_section}>
                        <img className={s.section_photo} src={SectionPhoto} alt="section_photo" />
                    </section>
                </div>
            </div>
        </>
    );
};

export default Services;