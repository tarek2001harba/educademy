import React from 'react'
import './blog.css'
const Blog = () => {
    return (
        <div className="blog align">
            <header className="hero">
                <video className="hero__bg" ref={bgRef} src={ Bg } muted autoPlay loop>
                    Failed to play the video.
                </video>
                <div className="hero__content align">
                    <div className="hero__slogan-container">
                        <h1 className="text--white anton-heading" >Education even from<br/>far away.</h1>
                    </div>
                    <div className="hero__cta-container">
                        <Button type="filled" text="Get Started" />
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Blog
