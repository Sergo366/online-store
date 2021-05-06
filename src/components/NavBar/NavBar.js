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

const NavBar = (props) => {
    return (
        <div className={s.products}>
            <NavBarItem text={'Ноутбуки и компьютеры'} img={tv} popProduct={props.server.laptop} pathLink='/computers'/>
            <NavBarItem text={'Смартфоны, ТВ и техника'} img={phone} popProduct={props.server.phone} pathLink='/telefony'/>
            <NavBarItem text={'Товары для геймеров'} img={game} popProduct={props.server.gamePlay} pathLink='/game'/>
            <NavBarItem text={'Бытовая техника'} img={technic} popProduct={props.server.technic} pathLink='/bt'/>
            <NavBarItem text={'Товары для дома'} img={house} popProduct={props.server.house} pathLink='/tovary-dlya-doma'/>
            <NavBarItem text={'Инструменты и автотовары'} img={inst} popProduct={props.server.inst} pathLink='/instrumenty-i-avtotovary'/>
            <NavBarItem text={'Сантехника и ремонт'} img={toilet} popProduct={props.server.toilet} pathLink='/santekhnika-i-remont'/>
            <NavBarItem text={'Красота и здоровье'} img={cosmetic} popProduct={props.server.cosmetic} pathLink='/krasota-i-zdorovje'/>
            <NavBarItem text={'Спорт и увлечения'} img={gym} popProduct={props.server.sport} pathLink='/sport-i-uvlecheniya'/>
            <NavBarItem text={'Одежда'} img={shirt} popProduct={props.server.clothes} pathLink='/shoes_clothes'/>
        </div>
    )
}

export default NavBar