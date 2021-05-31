import React from 'react'
import s from './Header.module.css'
import catalog from '../../image/header/katalog.svg'
import search from '../../image/header/search.svg'
import {Link} from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import FavouriteProductContainer from "./FavouriteProduct/FavouriteProductContainer";
import BasketContainer from "./Basket/BasketContainer";

const Header = (props) => {

    const logout = (event) => {
        event.preventDefault()
        props.logoutUser()
    }


    return (
        <>
            {props.stateShowLikeProduct && <FavouriteProductContainer/>}
            {props.stateShowBasketProduct && <BasketContainer/>}

            <header className={s.header}>
                <div className={s.header__container}>
                    <div className={s.header__content}>
                        <div>
                            <Logo/>
                            <Catalog/>
                            <form className={s.header__input}>
                                <img src={search} alt="" className={s.header__input - search}/>
                                <input type="text" placeholder='Я ищу...'/>
                                <button>Найти</button>
                            </form>
                        </div>

                        <Navigation toggleLikeProducts={props.toggleLikeProducts}
                                    showBasketProducts={props.showBasketProducts}
                                    showActiveLikeProduct={props.showActiveLikeProduct}
                                    showActiveBasket={props.showActiveBasket}
                                    activeIconMyAccount={props.activeIconMyAccount}
                        />

                        <div className={s.register__btn}>
                            <Link to='/autharization'
                                  onClick={props.authorization ? logout : null}>{props.authorization ? 'Logout' : 'Login'}</Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header


const Catalog = () => {
    return (
        <Link href="#" className={s.header__catalog}>
            <img src={catalog} alt=""/>
            <span>Каталог</span>
        </Link>
    )
}

export const Logo = () => {
    return (
        <Link to='/' className={s.logo}>
            <span>Shop</span>
            <span>UA</span>
        </Link>
    )
}

