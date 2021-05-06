import React, {useState} from 'react'
import s from './NavBar.module.css'
import arrow from '../../image/navBar/arrow-straight.png'
import {Link, NavLink} from "react-router-dom";

const NavBarItem = (props) => {

    let product = props.popProduct

    let mapProduct = product.map((i, index) => {
        return (
            <div key={index}>
                <NavLink to='/in-process-develop'>{i}</NavLink>
            </div>

        )
    })

    const [state, setState] = useState(false)

    const showDropList = () => {
        setState(true)
    }

    const hideDropList = () => {
        setState(false)
    }

    const focusEl = () => {
        setState(true)
    }

    return (
        <>
            <Link to={props.pathLink}  onMouseEnter={showDropList} onMouseLeave={hideDropList} className={s.products_item}>
                <img src={props.img} alt=""/>
                <p>{props.text}</p>
                <img src={arrow} alt="" className={s.arrow}/>
            </Link>
            {state
                ? <div className={s.dropDown__wrapper} onMouseEnter={focusEl}>
                    <div className={s.dropDown}  onMouseLeave={hideDropList}>
                        {mapProduct}
                    </div>
                </div>
                : null
            }
        </>
    )
}


export default NavBarItem
