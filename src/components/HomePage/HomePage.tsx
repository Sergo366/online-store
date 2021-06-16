import React, {FC, MouseEventHandler, useEffect} from "react";
import SliderProduct from "./SliderHome/SliderProduct";
import s from './homePage.module.css'
import {RandomPrice} from '../../assets/ProductPage'
import {NavLink} from "react-router-dom";
import heartEmpty from "../../image/homePage/heart-empty.svg";
import heartFull from "../../image/homePage/heart-full.svg";
import {productsType} from "../../types/types homePageReducer";

type PropsTypes = {
    addProducts: Function
    products: productsType[]
    addNewLikeProducts: Function
}

 const HomePage:FC<PropsTypes> = ({ addProducts, products, addNewLikeProducts }) => {

    useEffect(() => {
        addProducts()
    }, [addProducts])


    const likeProduct = (event: any) => {
        if (event.target.src === 'http://localhost:3000/static/media/heart-full.66089a9f.svg') event.target.src = heartEmpty
        else event.target.src = heartFull
    }


    const changeHeartPicture = (event: any) => {
        addNewLikeProducts(event.target.id)
    }

    let mapArrayState = products && products.map(i => {
            return <div key={i.id} className={s.content__item} id={String(i.id)}>
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
                        <img src={heartEmpty} onClick={likeProduct} id={String(i.id)}/>
                    </div>
                </div>
            </div>
        })

    return (
        <div>
            <div>
                <SliderProduct/>
            </div>
            <div className={s.container__content}>
                { products && mapArrayState }
            </div>
        </div>
    )
}

export default HomePage