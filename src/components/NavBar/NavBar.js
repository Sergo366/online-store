import React from 'react'
import s from './NavBar.module.css'
import tv from '../../image/navBar/tv.png'
import phone from '../../image/navBar/telephone.png'
import game from '../../image/navBar/game.png'
import technic from '../../image/navBar/fidge.png'
import house from '../../image/navBar/house.png'
import inst from '../../image/navBar/drill.png'
import toilet from '../../image/navBar/toilet.png'
import shirt from '../../image/navBar/shirt.png'
import gym from '../../image/navBar/gym.png'
import cosmetic from '../../image/navBar/cosmetics.png'
import NavBarItem from "./NavBarItem";

const NavBar = () => {
    return (
        <div className={s.products}>
            <NavBarItem text={'Ноутбуки и компьютеры'} img={tv} pathLink='/computers'/>
            <NavBarItem text={'Смартфоны, ТВ и техника'} img={phone} pathLink='/telefony'/>
            <NavBarItem text={'Товары для геймеров'} img={game} pathLink='/game'/>
            <NavBarItem text={'Бытовая техника'} img={technic} pathLink='/bt'/>
            <NavBarItem text={'Товары для дома'} img={house} pathLink='/tovary-dlya-doma'/>
            <NavBarItem text={'Инструменты и автотовары'} img={inst} pathLink='/instrumenty-i-avtotovary'/>
            <NavBarItem text={'Сантехника и ремонт'} img={toilet} pathLink='/santekhnika-i-remont'/>
            <NavBarItem text={'Красота и здоровье'} img={cosmetic} pathLink='/krasota-i-zdorovje'/>
            <NavBarItem text={'Спорт и увлечения'} img={gym}  pathLink='/sport-i-uvlecheniya'/>
            <NavBarItem text={'Одежда'} img={shirt} pathLink='/shoes_clothes'/>
        </div>
    )
}

export default NavBar