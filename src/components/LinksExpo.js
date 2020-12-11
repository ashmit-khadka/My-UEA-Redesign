import React from 'react'
import {ReactComponent as IconDot} from '../assets/dot.svg'
import {ReactComponent as IconPin} from '../assets/pin.svg'
import {ReactComponent as IconSpeak} from '../assets/volume.svg'

import db from '../database/links.json'

const LinksExpoItem = (props) => {

    const speek = () => {
        const title = new SpeechSynthesisUtterance(props.content.title);
        const description = new SpeechSynthesisUtterance(props.content.description);
        window.speechSynthesis.speak(title);
        window.speechSynthesis.speak(description);

    }

    return (
        <div className='links-expo__link'>
            <IconDot className='dottt'/>
            <img src={'./assets/links/' + props.content.image}></img>
            <div className='links-expo__link__pin'>
                <IconPin className='pinsvg'/>
            </div>
            <IconSpeak className='link-speek' onClick={speek}/>
            <h3>{props.content.title}</h3>
            <p>{props.content.description}</p>
            
        </div>
    )
}

const LinksExpo = () => {

    const dataObj = {}
    //console.log(db.data)
    db.data.forEach(element => {
        if (dataObj[element.category])
            dataObj[element.category].push(element)
        else {
            dataObj[element.category] = [element]
        }
    });

    console.log(dataObj)

    return (
        <div className='links'>
            {
                Object.keys(dataObj).map(category => {
                    return (
                        <div className='links__category'>
                            <h2 className='test-header'>{category}</h2>
                                <div className='links-expo'>
                                {
                                    dataObj[category].map(item => 
                                        <LinksExpoItem content={item} />
                                    )
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default LinksExpo