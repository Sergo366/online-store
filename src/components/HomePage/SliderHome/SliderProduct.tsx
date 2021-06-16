import React, {FC, useState} from "react";
import s from './slider.module.css'
import prev from '../../../image/homePage/prev.svg'
import next from '../../../image/homePage/next.svg'
import slider1 from '../../../image/homePage/361_furniture_facebook_banner_template.jpg'
import slider2 from '../../../image/homePage/172441121.jpg'
import slider3 from '../../../image/homePage/173169256.jpg'
import slider4 from '../../../image/homePage/365743.jpg'

const SliderProduct:FC = () => {

    const [numbImage, setNumbImage] = useState(0)

    const sliderImage = [slider1, slider2, slider3, slider4,]

    const handleNextButton = (event: any) => {
        if (numbImage <= sliderImage.length - 2) {
            setNumbImage(numbImage + 1)
        } else {
            setNumbImage(0)
        }
    }

    const handlePrevButton = () => {
        if (numbImage <= 0) {
            setNumbImage(sliderImage.length - 1)
        } else {
            setNumbImage(numbImage - 1)
        }
    }
    return (
        <div>
            <div className={s.container}>
                <div onClick={handlePrevButton} className={s.container__prev}>
                    <img src={prev} alt=""/>
                </div>
                <div className={s.container__image}>
                    <img src={sliderImage[numbImage]} alt="slider-item"/>
                </div>
                <div onClick={handleNextButton} className={s.container__next}>
                    <img src={next} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default SliderProduct