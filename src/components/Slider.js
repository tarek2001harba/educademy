import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import Slide from '../components/Slide'
import '../assets/css/slider.css'
const Slider = ({ slides, dir, sliderHeight }) => {
    const sliderRef = useRef()
    useEffect(() => {
        
        const sliderWidth = sliderRef.current.getBoundingClientRect().width
        const slideWidth = sliderWidth / slides.length
        gsap.set(".slider__content", {
            x: -slideWidth
        })
        gsap.set(".slide", {
            x: i => i * slideWidth
        })
        gsap.to(".slide", {
            duration: 10,
            ease: "none",
            x: 500,
            modifiers: {
                x: gsap.utils.unitize(x => console.log(parseFloat(x) % 500))
            },
            repeat: 5
        })
    })
    return (
        <div className="slider" >
            <div className="slider__content" ref={sliderRef}>
                <Slide slideSrc={slides[0]}/>
                <Slide slideSrc={slides[1]}/>
                <Slide slideSrc={slides[2]}/>
            </div>
        </div>
    )
}
Slider.defaultProps = {
    sliderHeight: 50
}
export default Slider
