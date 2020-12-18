import React, { useState, useEffect } from 'react'
import {ReactComponent as IconShortcut} from '../assets/molecular.svg'
import {ReactComponent as IconNewspaper} from '../assets/newspaper.svg'
import {ReactComponent as IconForeign} from '../assets/foreign.svg'
import {ReactComponent as IconEvents} from '../assets/event.svg'


const sections = [
    {
        "title": "My Shortcuts",
        "id": "section-shortcuts",
        "icon": <IconShortcut/>

    },    
    {
        "title": "Portal",
        "id": "section-portal",
        "icon": <IconForeign/>
    },
    {
        "title": "Latest News",
        "id": "section-news",
        "icon": <IconNewspaper/>
    },
    {
        "title": "Evetns",
        "id": "section-events",
        "icon": <IconEvents/>
    },
]


const DockItem = (props) => {

    const [style, setStyle] = useState('')
    let section = null
    //console.log(section.offsetTop)
    const scroll = () => {
        const sectionPosition = section.offsetTop;
        window.scrollTo({
            top: sectionPosition,
            behavior: "smooth"
        });
    }


    useEffect(() => {
        section = document.getElementById(props.section);
    }, [])


    return (
        <div className='dock-item'>
            <button id={props.id + '-link'} className='dock-item__link dock-item--active' onClick={scroll}>{props.icon}{props.title}</button>
        </div>
    )
}

const Dock = () => {


    return (
        <div id='dock' className='dock'>
            <div className='dock__content'>
                {
                    sections.map((section, index) => 
                        <DockItem key={index} title={section.title} section={section.id} icon={section.icon} index={index}/>
                    )
                }
            </div>
        </div>
    )
}


export default Dock