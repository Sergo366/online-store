import React from "react";
import s from './favouriteProduct.module.css'
import {NavLink} from "react-router-dom";
import {RandomPrice} from "../../../assets/ProductPage";


const FavouriteProduct = ({products, likeProducts, addProductsToBasket, closeLikeProducts}) => {

    const arrayProducts = []

    likeProducts.forEach(j => {
        products.forEach(i => {
            if (+j === i.id) arrayProducts.push(i)
        })
    })

    const addProductToBasket = (event) => {
        addProductsToBasket(event.target.id)
    }

    let favouriteProduct = arrayProducts.map((i) => {
        return (
            <div key={i.id} className={s.content__item} id={i.id}>
                <NavLink to={'/'} className={s.image}><img src={i.url} alt=""/></NavLink>
                <div className={s.describe}>
                    <NavLink to={'/'} className={s.title}><p>{i.title}</p></NavLink>
                    <div className={s.basket__btn}>
                        <button id={i.id} onClick={addProductToBasket}>Добавить в корзину</button>
                    </div>
                    <div className={s.price}>{RandomPrice()}</div>
                </div>
            </div>
        )
    })

    const click = (event) => {
        closeLikeProducts()
    }



    return (
        <div className={s.background__wrapper} onClick={click}>
            <div className={s.wrapper} onClick={(e) => e.stopPropagation()}>
                <h3 className={s.favourite__block}>
                    <p>Понравившиеся товары</p>
                </h3>
                {favouriteProduct.length === 0
                    ? <div className={s.defaultText}>У Вас нету понравившихся товаров!</div>
                    : null}
                {favouriteProduct}
            </div>
        </div>

    )
}

export default FavouriteProduct