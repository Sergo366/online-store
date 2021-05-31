import React from "react"
import s from "../Header.module.css";
import {Link} from "react-router-dom";
import person from "../../../image/header/person-office.svg";
import basket from "../../../image/header/basket.svg";
import favouriteProduct from "../../../image/header/favourite-product.png";

const Navigation = ({toggleLikeProducts, showBasketProducts, showActiveLikeProduct, showActiveBasket, activeIconMyAccount}) => {

    return (
        <nav className={s.header__nav}>
            <ul className={s.header__menu}>
                <li>
                    <Link to={"/myaccount"}
                          className={activeIconMyAccount ? `${s.menu__item} ${s.active}` : s.menu__item}>
                        <img src={person} alt=""/>
                    </Link>
                </li>
                <li className={showActiveBasket ? `${s.menu__item} ${s.active}` : s.menu__item}>
                    <img src={basket} alt="" onClick={showBasketProducts}/>
                </li>
                <li className={showActiveLikeProduct ? `${s.menu__item} ${s.active}` : s.menu__item}>
                    <img src={favouriteProduct} onClick={toggleLikeProducts} alt=""/>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation