import React from 'react'
import '../assets/css/slide.css'
const Slide = ({slideSrc}) => {
    return (
        <div className="slide">
            <img src={slideSrc} alt="" />
        </div>
    )
}

export default Slide
