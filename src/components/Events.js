import React from 'react'
import {ReactComponent as IconDot} from '../assets/dot.svg'
import {ReactComponent as IconCalendar} from '../assets/calendar.svg'
import {ReactComponent as IconLocation} from '../assets/placeholder.svg'
import {ReactComponent as IconPin} from '../assets/pin.svg'

import eventDB from '../database/events.json'


const Event = (props) => {
    return (
        <div className='event'>

            <div className='event__desc'>
                <h4>{props.data.title}</h4>
                <p>{props.data.description}</p>
            </div>
            <div className='event__time'>
                <div>
                    <p><IconCalendar/>{props.data.date}</p>
                    <p><IconLocation/>{props.data.location}</p>
                </div>
                <IconPin className='event__pin'/>
                <IconDot className='event__dot'/>

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