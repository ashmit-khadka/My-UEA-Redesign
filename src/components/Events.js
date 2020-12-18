import React, { useState } from 'react'
import {ReactComponent as IconDot} from '../assets/dot.svg'
import {ReactComponent as IconCalendar} from '../assets/calendar.svg'
import {ReactComponent as IconLocation} from '../assets/placeholder.svg'
import {ReactComponent as IconClock} from '../assets/clock.svg'
import {ReactComponent as IconPin} from '../assets/pin.svg'

import eventDB from '../database/events.json'

//redux
import { useSelector, useDispatch } from 'react-redux';
import { setStatus } from '../redux/actions/StatusActions'

const sections = [
    {
        "title": "My Shortcuts",
        "id": "section-shortcuts",

    },    
    {
        "title": "Portal",
        "id": "section-portal",
    },
    {
        "title": "Latest News",
        "id": "section-news",
    },
    {
        "title": "Evetns",
        "id": "section-events",
    },
]

const Event = (props) => {

    const [pinned, setPinned] = useState(false)
    const dispatch = useDispatch()

    const pinEvent = () => {
        setPinned(!pinned)
        console.log('isPinned', pinned)


        if (pinned) {
            dispatch(setStatus({
                'text': 'Removed shortcut for event ' + props.data.title,
                'action': () => {
                    dispatch(() => {setPinned(true)})
                }
            }))
        } 
        else {
            dispatch(setStatus({
                'text': 'Added shortcut for event ' + props.data.title,
                'action': () => {setPinned(true)}}
            ))
        }

    }

    const speak = () => {
        const title = new SpeechSynthesisUtterance(props.content.title);
        const description = new SpeechSynthesisUtterance(props.content.description);
        window.speechSynthesis.speak(title);
        window.speechSynthesis.speak(description);

    }

    return (
        <div className='event'>

            <div className='event__desc'>
                <h4>{props.data.title}</h4>
                <p>{props.data.description}</p>
                <IconDot className='event__dot'/>

            </div>
            <div className='event__time'>
                <div>
                    <p><IconCalendar/>{props.data.date}</p>
                    <p><IconClock/>{props.data.to}</p>
                    <p><IconLocation/>{props.data.location}</p>
                </div>
                <IconPin className={pinned ? 'button--large pinned' : 'button--large'} onClick={pinEvent}/>

            </div>

        </div>
    )
}

const Events = () => {
    return ( 
        <div className='events'>
            {
                eventDB.data.map((event, index) => {
                    return <Event key={index} data={event}/>
                })
            }
        </div>
    )
}


export default Events