import React from 'react'
import SliderComponent from '../../components/sliderComponent/SliderComponent'
import slider1 from '../../assets/slider_1.jpg'
import slider2 from '../../assets/slider_2.jpg'
import slider3 from '../../assets/slider_3.jpg'
import "./HomePageStyle.css"

const HomePage = () => {
    return (
        <div className='home-container'>
            <div className="home-slider">
                <SliderComponent arrImages={[slider1, slider2, slider3]} />
            </div>
        </div>
    )
}

export default HomePage