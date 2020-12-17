import React, { useEffect } from 'react'
import {ReactComponent as IconClose} from '../assets/close.svg'
import {ReactComponent as IconUndo} from '../assets/undo.svg'


//redux
import { useSelector, useDispatch } from 'react-redux';
import { setStatus } from '../redux/actions/StatusActions'

let statusCount = 0


const Status = () => {

    const status = useSelector(state => state.StatusReducer)
    const dispatch = useDispatch()


    useEffect(() => {
        if (statusCount > 0)
            document.getElementById('status').classList.add('status__show')
        statusCount += 1
        hideStatusTimed(statusCount)

    }, [status])


    const hideStatusTimed = (currentCount) => {
        setTimeout(() => {
            if (currentCount === statusCount)
                hideStatusNow()
        }, 5000)

    }

    const hideStatusNow = () => {
        document.getElementById('status').classList.remove('status__show')
    }


    return (
        <div id='status' className='status'>
            <span>{status.text}</span>
            <IconUndo onClick={() => {status.action(); hideStatusNow()}}/>
            <IconClose onClick={hideStatusNow}/>
        </div>
    )
} 

export default Status