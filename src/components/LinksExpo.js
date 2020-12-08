import React from 'react'
import {ReactComponent as IconDot} from '../assets/dot.svg'
import {ReactComponent as IconPin} from '../assets/pin.svg'

import db from '../database/links.json'

const LinksExpoItem = (props) => {
    return (
        <div className='links-expo__link'>
            <IconDot className='dottt'/>
            <img src={'./assets/links/' + props.content.image}></img>
            <div className='links-expo__link__pin'>
                <IconPin className='pinsvg'/>
            </div>
            <h3>{props.content.title}</h3>
            <p>{props.content.description}</p>
        </div>
    )
}

const LinksExpo = () => {
    console.log(db.data)
    return (
        <div className='links-expo'>
            {
                db.data.map(item => 
                    <LinksExpoItem content={item} />
                )
            }
        </div>
    )
}

export default LinksExpo