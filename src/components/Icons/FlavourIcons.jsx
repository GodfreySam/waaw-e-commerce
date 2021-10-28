import React from 'react'
import { BsFillCircleFill } from 'react-icons/bs'
import './flavouricons.css'

const FlavourButtons = () => {
    return (
        <div className="buttons__flavour">
            <li>
                <BsFillCircleFill style={{
                    fontSize: '35px',
                    color: 'yellow'
                }}/>
            </li>

            <li>
                <BsFillCircleFill style={{ 
                    fontSize: '35px',
                    color: 'green'
                    }}/>
            </li>

            <li>
                <BsFillCircleFill style={{ 
                    fontSize: '35px',
                    color: 'brown'}}/>
            </li>

            <li>
                <BsFillCircleFill style ={{
                    fontSize: '35px',
                    color: 'purple'
                }}/>
            </li>
        </div>
    )
}

export default FlavourButtons
