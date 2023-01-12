import Slider from 'react-slick'
import React from 'react'

interface Setting {
    dots?: boolean
    infinite?: boolean
    speed?: string | number
    slidesToShow?: string | number
    slidesToScroll?: string | number
    arrows?: boolean
    adaptiveHeight?: boolean
}
const SingleSlider = ({ children }: ReactNode): ReactNode => {
    const setting: Setting = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        adaptiveHeight: true,
    }
    return (
        <Slider style={{ textAlign: '-webkit-center' }} {...setting}>
            {children}
        </Slider>
    )
}

export default SingleSlider
