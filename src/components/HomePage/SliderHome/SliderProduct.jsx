import React, {useState} from "react";
import s from './slider.module.css'
import prev from  '../../../image/homePage/prev.svg'
import next from  '../../../image/homePage/next.svg'

const SliderProduct = () => {

    const [numbImage, setNumbImage] = useState(0)

    const sliderImage = ['https://content1.rozetka.com.ua/banner_main/image/original/172441121.jpg', 'https://content2.rozetka.com.ua/banner_main/image/original/170801201.jpg', 'https://content1.rozetka.com.ua/banner_main/image/original/173169256.jpg']

    const handleNextButton = () => {
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
                <div onClick={handlePrevButton} className={s.container__prev}><img src={prev} alt=""/></div>
                <img src={sliderImage[numbImage]} alt="slider-item"/>
                <div onClick={handleNextButton} className={s.container__next}><img src={next} alt=""/></div>
            </div>
        </div>
    )
}

export default SliderProduct