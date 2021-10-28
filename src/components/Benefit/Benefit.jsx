import React from 'react'
import './benefit.css'

const Benefit = ({image, title, description}) => {
    return (
        <div className='benefit'>
            <div className="benefit__head">
                {image}
                <h3>{title}</h3>
            </div>
            <div className="benefit__body">
                <p>{description}</p>
            </div>
        </div>
    )
}
export default Benefit
