import React, {useEffect, useState} from "react";
import SliderProduct from "./SliderHome/SliderProduct";
import s from './homePage.module.css'
import {RandomPrice} from '../../assets/ProductPage'
import {NavLink} from "react-router-dom";
import heartEmpty from "../../image/homePage/heart-empty.svg";
import heartFull from "../../image/homePage/heart-full.svg";
import {getProducts} from "../../Redux/homePageReducer";

const HomePage = ({ addProducts, products, addNewLikeProducts }) => {

    const likeProduct = (event) => {
        if (event.target.src === 'http://localhost:3000/static/media/heart-full.66089a9f.svg') event.target.src = heartEmpty
        else event.target.src = heartFull
    }

    useEffect(() => {
        console.log(addProducts)
        addProducts()
    }, [addProducts])

    const changeHeartPicture = (event) => {
        addNewLikeProducts(event.target.id)
    }

    let mapArrayState = products ? products.map(i => {
            return <div key={i.id} className={s.content__item} id={i.id}>
                <NavLink to={'/'} className={s.image}>
                    <img src={i.url} />
                </NavLink>
                <NavLink to={'/'} className={s.title}>
                    <p>{i.title}</p>
                </NavLink>
                <div className={s.row} >
                    <div className={s.price}>
                        {RandomPrice()}
                    </div>
                    <div className={s.heart} onClick={changeHeartPicture}>
                        <img src={heartEmpty} onClick={likeProduct} id={i.id}/>
                    </div>
                </div>
            </div>
        })
        : null


    return (
        <div>
            <div>
                <SliderProduct/>
            </div>
            <div className={s.container__content}>
                {products ? mapArrayState : null}
            </div>
        </div>
    )
}

export default HomePage