import React from 'react';
import s from './Header.module.scss'
import logo from '../../Assets/logo.png'
import { slide as Menu } from 'react-burger-menu'
import Sidebar from '../../UI/SideBar/sidebar';

const Header = () => {
    return (
        <div id='container'>
            <div className={s.header}>
                <div className={s.logo}>
                    <img src={logo} alt="logo" />
                </div>
                <nav>
                    <ul className={s.menu}>
                        <li>Создать задание</li>
                        <li>Найти задание</li>
                    </ul>
                    <div className={s.header__btn}>
                        <button>
                            <span>Вход и регистрация</span>
                        </button>
                        <div className={s.burger}>
                            <Sidebar />
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;