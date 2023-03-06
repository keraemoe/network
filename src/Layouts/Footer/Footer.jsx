import React from 'react';
import s from './Footer.module.scss'
import footer_logo from '../../Assets/footer_logo.png'

const Footer = () => {
    return (
        <>
            <div id='container'>
                <div className={s.footer}>
                    <div className={s.logo_content}>
                        <img src={footer_logo} alt="footer_logo" />
                        <span>© 2022 Netowork <br /> Все права защищены</span>
                    </div>
                    <div className={s.nav_content}>
                        <nav>
                            <ul>
                                <li>О платформе</li>
                                <li>Как разместить заказ</li>
                                <li>Как получить заказ</li>
                                <li>Служба поддержки</li>
                            </ul>
                        </nav>
                    </div>
                    <div className={s.last_content}>
                        <nav>
                            <ul>
                                <li>Правила работы сервиса</li>
                                <li>Политика конфиденциальности</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;