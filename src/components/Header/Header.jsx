import React from 'react'
import s from './Header.module.css'
import person from '../../image/header/person-office.svg'
import basket from '../../image/header/basket.svg'
import favouriteProduct from '../../image/header/favourite-product.png'
import catalog from '../../image/header/katalog.svg'
import search from '../../image/header/search.svg'
import {Link} from "react-router-dom";

const Header = ({toggleLikeProducts, showBasketProducts, authorization, logoutUser, showActiveLikeProduct, showActiveBasket}) => {

    const showPopUpFavouriteProducts = () => toggleLikeProducts()
    const showPopUpBasketProduct = () => showBasketProducts()

    const logout = (event) => {
        event.preventDefault()
        logoutUser()

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
                            <li><Link to={"/myaccount"} className={s.menu__item}><img src={person} alt=""/></Link></li>
                            <li><Link to="/" className={showActiveBasket ? `${s.menu__item} ${s.active}` : s.menu__item}><img src={basket} alt="" onClick={showPopUpBasketProduct}/></Link></li>
                            <li><Link to="/" className={showActiveLikeProduct ?`${s.menu__item} ${s.active}` : s.menu__item}><img src={favouriteProduct} onClick={showPopUpFavouriteProducts} alt=""/></Link></li>
                        </ul>
                    </nav>
                    <div className={s.register__btn}>
                        <Link to='/autharization' onClick={authorization ? logout : null}>{authorization ? 'Logout' : 'Login'}</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

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

export default Header