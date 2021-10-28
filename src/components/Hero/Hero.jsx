import React from 'react'
import './hero.css'

const Hero = () => {
    return (
        <div className='hero_section'>
            <div className="hero_section--content">
                <h1 className='hero_section--title'>Fresh Fruits Juice</h1>
                <p className='hero_section--text'>Our Organic juice contain all necessary elements and vitamins for health</p>
                <input type='button' value='SHOP NOW' className='hero_section--button'/>
            </div>
            <div className="hero__pagination">
                <div className="hero__pagination--before"></div>
                <div className="hero__pagination--after"></div>
            </div>
        </div>
    )
}

export default Hero
