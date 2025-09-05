import { Image } from 'antd';
import React from 'react'
import Slider from 'react-slick';

const SliderComponent = ({ arrImages }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };
    return (
        <Slider {...settings}>
            {arrImages.map((img) => {
                return (
                    <Image src={img} alt="Slider Image" preview="false" width="100%" height="274px" />
                )
            })}
        </Slider>
    )
}

export default SliderComponent