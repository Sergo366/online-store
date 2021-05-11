import React, {useEffect, useState} from "react";
import SliderProduct from "./SliderHome/SliderProduct";
import {getPhotos} from "../../axios/axios";
import s from './homePage.module.css'
import {RandomPrice} from '../../assets/ProductPage'
import {NavLink} from "react-router-dom";
import heartEmpty from "../../image/homePage/heart-empty.svg";
import heartFull from "../../image/homePage/heart-full.svg";

const HomePage = ({addNewFavouriteProduct}) => {

    const [state, setState] = useState()

    useEffect(() => {
        getPhotos().then(r => {
            if (!state) {
                setState(r)
            }
        })
    })

    const likeProduct = (e) => {
        addNewFavouriteProduct(e.target.id)
        if (e.target.src === 'http://localhost:3000/static/media/heart-full.66089a9f.svg') {
            e.target.src = heartEmpty
        } else {
            e.target.src = heartFull
        }
    }

    let mapArrayState = state ? state.map(i => {
            return <div key={i.id} className={s.content__item} id={i.id}>
                <NavLink to={'/'} className={s.image}><img src={i.url} alt=""/></NavLink>
                <NavLink to={'/'} className={s.title}><p>{i.title}</p></NavLink>
                <div className={s.row}>
                    <div className={s.price}>{RandomPrice()}</div>
                    <div className={s.heart}><img src={heartEmpty} onClick={likeProduct}  id={i.id} alt=""/></div>
                </div>
            </div>
        })
        : null

    localStorage.setItem('products', JSON.stringify(state))

    return (
        <div>
            <div>
                <SliderProduct/>
            </div>
            <div className={s.container__content}>
                {state ? mapArrayState : null}
            </div>
        </div>
    )
}

export default HomePage