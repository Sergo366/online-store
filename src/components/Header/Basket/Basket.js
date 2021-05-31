import React from "react";
import s from './Basket.module.css'
import {NavLink} from "react-router-dom";
import {RandomPrice} from "../../../assets/ProductPage";

const Basket = ({basketProducts, products, closeBasket}) => {


    const arrayProducts = []
    basketProducts.forEach(j => {
        products.forEach(i => {
            if (+j === i.id) arrayProducts.push(i)
        })
    })

    let basketProd = arrayProducts.map((i) => {
        return (
            <div key={i.id} className={s.content__item} id={i.id}>
                <NavLink to={'/'} className={s.image}><img src={i.url} alt=""/></NavLink>
                <div className={s.describe}>
                    <NavLink to={'/'} className={s.title}><p>{i.title}</p></NavLink>
                    <div className={s.basket__btn}>
                        <button>Оплатить</button>
                    </div>
                    <div className={s.price}>{ RandomPrice()}</div>
                </div>
            </div>
        )
    })





    return (
        <div className={s.background__wrapper} onClick={closeBasket}>
            <div className={s.wrapper} onClick={(e) => e.stopPropagation()}>
                <h3 className={s.basket__block}>
                    Корзина
                </h3>
                <div className={s.content}>
                    {basketProd}
                    {basketProd.length === 0 ? <div className={s.defaultText}>Недобавленно ни одного товара!</div> : null}
                </div>
                <div className={s.buy__btn}>
                    <button>Оплатить все товары</button>
                </div>
                <a href=""></a>
            </div>
        </div>

    )
}

export default Basket