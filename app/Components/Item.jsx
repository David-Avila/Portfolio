import { useState } from 'react'
import Tooltip from './Tooltip';

export default function Item({icon, tooltip}){
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <h3>
            <a className='item'
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            >
                {icon}                
                <Tooltip enabled={showTooltip} tooltip={tooltip}/>
            </a>
            
        </h3>
    )
}