import React, { useState } from 'react'
import {ReactComponent as IconDot} from '../assets/dot.svg'
import {ReactComponent as IconPin} from '../assets/pin.svg'
import {ReactComponent as IconSpeak} from '../assets/volume.svg'


//redux
import { useSelector, useDispatch } from 'react-redux';
import { addShortCut, setShortCut, removeShortCut } from '../redux/actions/ShortcutActions'
import { setStatus } from '../redux/actions/StatusActions'


import db from '../database/links.json'
import Skeleton from 'react-loading-skeleton';

const LinksExpoItem = (props) => {
    const shortcuts = useSelector(state => state.ShortcutReducer)
    const [loading, setLoading] = useState(true)
    setTimeout(() => {setLoading(false)}, 2000)

    let isPinned = false
    shortcuts.forEach(shortcut => {
        if (shortcut.title === props.content.title && shortcut.type === props.content.type) {
            //console.log('yes', props.content)
            isPinned = true
        }
    })


    const speak = () => {
        const title = new SpeechSynthesisUtterance(props.content.title);
        const description = new SpeechSynthesisUtterance(props.content.description);
        window.speechSynthesis.speak(title);
        window.speechSynthesis.speak(description);

    }

    const dispatch = useDispatch()

    const toggleShortCutAction = () => {
        const fnAdd = addShortCut({
            "title": props.content.title,
            "type": "link",
            "image": props.content.image,
            "imagePath": "/links/"
        })

        const fnRemove = removeShortCut({
            "title": props.content.title,
            "type": "link",
        })


        if (isPinned) {
            dispatch(fnRemove)
            dispatch(setStatus({
                'text': 'Removed shortcut for link ' + props.content.title,
                'action': () => {
                    dispatch(fnAdd)
                }
            }))
        }
        else {
            dispatch(fnAdd)
            dispatch(setStatus({
                'text': 'Added shortcut for link ' + props.content.title,
                'action': () => {
                    dispatch(fnRemove)
                }
            }))
        }

    }

    return (
        <div className='links-expo__link'>
            <IconDot className='dottt'/>
            {loading ? <Skeleton circle={true} height={150} width={150}/> : <img src={'./assets/links/' + props.content.image}></img>}
            <div className='links-expo__link__pin'>
                <IconPin className={isPinned ? 'pinsvg pinsvg--pinned': 'pinsvg'} onClick={toggleShortCutAction} />
            </div>
            <IconSpeak className='link-speek' onClick={speak}/>
            <h3>{loading ? <Skeleton width={70}/> : props.content.title}</h3>
            <p>{loading ? <Skeleton width={70} count={3}/> : props.content.description}</p>
            
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

    //console.log(dataObj)

    return (
        <div id='links-expo' className='links'>
            {
                Object.keys(dataObj).map(category => {
                    return (
                        <div className='links__category'>
                            <h2 className='test-header'>{category}</h2>
                                <div className='links-expo'>
                                {
                                    dataObj[category].map((item, index) => 
                                        <LinksExpoItem key={index} content={item} />
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