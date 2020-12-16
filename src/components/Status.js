import React from 'react'
import {ReactComponent as IconClose} from '../assets/close.svg'
import {ReactComponent as IconUndo} from '../assets/undo.svg'

const Status = () => {

    return (
        <div className='status'>
            <span>This is some action</span>
            <IconUndo/>
            <IconClose/>
        </div>
    )
} 

export default Status