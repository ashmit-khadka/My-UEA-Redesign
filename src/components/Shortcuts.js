import React from 'react'
//redux
import { useSelector, useDispatch } from 'react-redux';
import { addShortCut, setShortCut, removeShortCut } from '../redux/actions/ShortcutActions'
import {ReactComponent as IconPin} from '../assets/pin.svg'
import {ReactComponent as IconClose} from '../assets/close.svg'


const Shortcut = (props) => {

    const dispatch = useDispatch()

    const removeShortcutAction = () => {
        dispatch(removeShortCut({
            "title": props.data.title,
            "type": props.data.type
        }))
    }

    console.log(props.data)
    return (
        <div className='model__shortcut'>
            <div className='model__shortcut__content'>
                <img src={'./assets' + props.data.imagePath + props.data.image}></img>
                <div className='model__shortcut__content__text'>
                    <span>{props.data.title}</span>
                    <span>{props.data.type}</span>
                </div>
                <IconPin className='button--large' onClick={removeShortcutAction}/>

            </div>

        </div>
    )
}

const Shortcuts = () => {
    const shortcuts = useSelector(state => state.ShortcutReducer)


    /*
    const toggleShortCutAction = () => {
        if (isPinned) {
            dispatch(removeShortCut({
                "title": props.content.title,
                "type": "news",
            }))
        }
        else {
            dispatch(addShortCut({
                "title": props.content.title,
                "type": "news",
                "image": props.content.image,
                "imagePath": "/news/"
            }))
        }

    }
    */

    const hide = () => {
        document.getElementById('shortcut__model').classList.add('model__hide')
    }

    return (
        <div id='shortcut__model' className='model model__hide'>
            <div className='model__content'>
                <div className='model__controls'>
                    <IconClose className='button' onClick={hide}/>
                </div>
                {
                    shortcuts.map(shortcut => {
                        return <Shortcut data={shortcut}/>
                    })
                }
                {!shortcuts.length && <p className='model__shortcut__msg-none'>Looks like you dont have any shortcuts!</p> }
            </div>
        </div>
    )
}

export default Shortcuts