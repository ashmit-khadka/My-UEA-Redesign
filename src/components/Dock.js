import React from 'react'
import {ReactComponent as IconShortcut} from '../assets/molecular.svg'
import {ReactComponent as IconNewspaper} from '../assets/newspaper.svg'
import {ReactComponent as IconForeign} from '../assets/foreign.svg'
import {ReactComponent as IconEvents} from '../assets/event.svg'


const DockItem = (props) => {

    const scroll = () => {
        const section = document.getElementById(props.section);
        const sectionPosition = section.offsetTop;
        //const offsetPosition = sectionPosition - headerOffset;
        console.log(sectionPosition)
        window.scrollTo({
            top: sectionPosition,
            behavior: "smooth"
        });
    }

    return (
        <div className='dock-item'>
            <a onClick={scroll}>{props.icon}{props.text}</a>
        </div>
    )
}

const Dock = () => {
    return (
        <div className='dock'>
            <div className='dock__content'>
                <DockItem text={'My Shortcuts'} section={'section-shortcuts'} icon={<IconShortcut/>}/>
                <DockItem text={'Portal'} section={'section-portal'} icon={<IconForeign/>}/>
                <DockItem text={'Latest News'} section={'section-news'} icon={<IconNewspaper/>}/>
                <DockItem text={'Events'} section={'section-events'} icon={<IconEvents/>}/>

            </div>
        </div>
    )
}


export default Dock