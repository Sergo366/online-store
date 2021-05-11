import React, {useState} from 'react'
import s from './Header.module.css'
import person from '../../image/header/person-office.svg'
import basket from '../../image/header/basket.svg'
import favouriteProduct from '../../image/header/favourite-product.png'
import catalog from '../../image/header/katalog.svg'
import search from '../../image/header/search.svg'
import {NavLink} from "react-router-dom";

const Header = (props) => {

    const showFavouriteProduct = () => {
        props.setState(!props.state)
    }

    return(
        <header className={s.header}>
            <div className={s.header__container}>
                <div className={s.header__content}>
                    <div>
                        <Logo />
                        <Catalog />
                        <form className={s.header__input}>
                            <img src={search} alt="" className={s.header__input-search}/>
                            <input type="text"  placeholder='Я ищу...'/>
                            <button>Найти</button>
                        </form>
                    </div>

                    <nav className={s.header__nav}>
                        <ul className={s.header__menu}>
                            <li><NavLink to="/" className={s.menu__item}><img src={person} alt=""/></NavLink></li>
                            <li><NavLink to="/" className={s.menu__item}><img src={basket} alt=""/></NavLink></li>
                            <li><NavLink to="/" className={s.menu__item}><img src={favouriteProduct} onClick={showFavouriteProduct} alt=""/></NavLink></li>
                        </ul>

                    </nav>

                </div>
            </div>
        </header>
    )
}

const Catalog = () => {
    return (
        <a href="#" className={s.header__catalog}>
            <img src={catalog} alt=""/>
            <span>Каталог</span>
        </a>
    )
}

export const Logo = () => {
    return (
        <NavLink to='/' className={s.logo}>
            <span>Shop</span>
            <span>UA</span>
        </NavLink>
    )
}

export default Header