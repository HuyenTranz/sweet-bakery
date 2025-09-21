import React from 'react'
import SliderComponent from '../../components/sliderComponent/SliderComponent'
import slider1 from '../../assets/slider_1.jpg'
import slider2 from '../../assets/slider_2.jpg'
import slider3 from '../../assets/slider_3.jpg'
import "./HomePageStyle.scss"
import CartComponent from '../../components/cardComponent/CardComponent'

const HomePage = () => {
    return (
        <div className='home-container'>
            <div className="home-slider">
                <SliderComponent arrImages={[slider1, slider2, slider3]} />
            </div>
            <div className="home-category">
                <div className="filters">
                    <select>
                        <option value="all">Tất cả</option>
                        <option value="asc">Giá tăng dần</option>
                        <option value="desc">Giá giảm dần</option>
                    </select>
                </div>
                <CartComponent />
            </div>
        </div>
    )
}

export default HomePage