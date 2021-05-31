import React from 'react'
import s from './NavBar.module.css'
import arrow from '../../image/navBar/arrow-straight.png'
import {Link} from "react-router-dom";

const NavBarItem = (props) => {

    return (
        <>
            <Link to={props.pathLink} className={s.products_item}>
                <img src={props.img} alt=""/>
                <p>{props.text}</p>
                <img src={arrow} alt="" className={s.arrow}/>
            </Link>
        </>
    )
}


export default NavBarItem
