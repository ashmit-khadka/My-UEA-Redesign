import React, { useEffect } from 'react'
//redux
import { useSelector, useDispatch } from 'react-redux';
import { addShortCut, setShortCut, removeShortCut } from '../redux/actions/ShortcutActions'
import {ReactComponent as IconPin} from '../assets/pin.svg'
import {ReactComponent as IconClose} from '../assets/close.svg'
import {ReactComponent as IconInfomation} from '../assets/information.svg'
import { setHelpShortcut, setHelpEvents } from '../redux/actions/HelpActions'


const Shortcut = (props) => {

    const dispatch = useDispatch()

    const removeShortcutAction = () => {
        dispatch(removeShortCut({
            "title": props.data.title,
            "type": props.data.type
        }))
    }

    //console.log(props.data)
    let type = ''
    if (props.data.type === 'link') {
        <p className='element-text--portal'>{props.data.type}</p>
    }

    return (
        <div className='model__shortcut'>
            <div className='model__shortcut__content'>
                <img src={'./assets' + props.data.imagePath + props.data.image}></img>
                <div className='model__shortcut__content__text'>
                    <p>{props.data.title}</p>
                </div>
                <IconPin className='button--large' onClick={removeShortcutAction}/>

            </div>

        </div>
    )
}

const Shortcuts = () => {
    const shortcuts = useSelector(state => state.ShortcutReducer)
    const dispatch = useDispatch()


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
   
   const showHelp = (action) => {
        dispatch(action())
        document.getElementById('model-help').classList.add('model__show')
    }

   useEffect(() => {
        document.getElementById("model-shortcut").addEventListener("click", function( e ){
            e = window.event || e; 
            if(this === e.target) {
                hide()
            }
        });    
    }, [])

    const hide = () => {
        document.getElementById('model-shortcut').classList.remove('model__show')
    }

    return (
        <div id='model-shortcut' className='model model__hide'>
            <div className='model__content'>
                <div className='model__controls'>
                    <div></div>
                    <h2>Shortcuts</h2>
                    <IconClose className='button' onClick={hide}/>
                </div>
                {
                    shortcuts.map((shortcut, index) => {
                        return <Shortcut key={index} data={shortcut}/>
                    })
                }
                {!shortcuts.length && (
                    <div className='model__shortcut__msg-none'>
                    <p className=''>Looks like you dont have any shortcuts! Click the info button to learn more</p>
                    <IconInfomation className='button' onClick={()=> {showHelp(setHelpShortcut)}}/>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Shortcuts