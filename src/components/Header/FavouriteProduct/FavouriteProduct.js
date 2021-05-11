import React, {useEffect, useState} from "react";
import s from './favouriteProduct.module.css'
import {NavLink} from "react-router-dom";
import {RandomPrice} from "../../../assets/ProductPage";


const FavouriteProduct = () => {

    const [state, seState] = useState(false)

    let idPeople = JSON.parse(localStorage.getItem('idPeople'))
    let products = JSON.parse(localStorage.getItem('products'))

    let favouriteProduct = products
        ? products.map((i) => {
            for (let j = 0; j < idPeople.length; j++) {

                if (i.id === j) {
                    return <div key={i.id} className={s.content__item} id={i.id}>
                        <NavLink to={'/'} className={s.image}><img src={i.url} alt=""/></NavLink>
                        <div className={s.describe}>
                            <NavLink to={'/'} className={s.title}><p>{i.title}</p></NavLink>
                            <div className={s.price}>{RandomPrice()}</div>
                        </div>
                    </div>
                }
            }
        })
        : null

    return (
        <div className={s.wrapper}>
            <div className={s.content}>
                {idPeople
                    ? favouriteProduct
                    : <div className={s.defaultText}>У Вас нету понравившихся товаров!</div>
                }
            </div>
        </div>
    )
}

export default FavouriteProduct