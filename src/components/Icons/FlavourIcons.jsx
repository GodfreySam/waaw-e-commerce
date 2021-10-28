import React from 'react'
import { BsFillCircleFill } from 'react-icons/bs'
import './flavouricons.css'

const FlavourButtons = () => {
    return (
        <div className="buttons__flavour">
            <li>
                <a href='https://twitter.com'>
                    <BsFillCircleFill style={{
                        fontSize: '35px',
                        color: 'yellow'
                    }}/>
                </a>
            </li>

            <li>
                <a href='https://facebook.com'>
                    <BsFillCircleFill style={{ 
                        fontSize: '35px',
                        color: 'green'
                        }}/>
                </a>
            </li>

            <li>
                <a href='https://linkedin.com'>
                    <BsFillCircleFill style={{ 
                        fontSize: '35px',
                        color: 'brown'}}/>
                </a>
            </li>

            <li>
                <a href='https://linkedin.com'>
                    <BsFillCircleFill style ={{
                        fontSize: '35px',
                        color: 'purple'
                    }}/>
                </a>
            </li>
        </div>
    )
}

export default FlavourButtons
