import Slider from 'react-slick'
import React from 'react'

interface Responsive {
    settings?: Setting
    breakpoint?: string | number
}
interface Setting {
    dots?: boolean
    infinite?: boolean
    speed?: string | number
    slidesToShow?: string | number
    slidesToScroll?: string | number
    arrows?: boolean
    adaptiveHeight?: boolean
    responsive?: Responsive[]
}
const Sliders = ({ children }: ReactNode): ReactNode => {
    const setting: Setting = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }
    return <Slider {...setting}>{children}</Slider>
}

export default Sliders
