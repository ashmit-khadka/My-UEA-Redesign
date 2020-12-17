import React from 'react'
import newsImg from '../assets/images/news/news_4.jpg'
import {ReactComponent as IconFacebook} from '../assets/facebook.svg'
import {ReactComponent as IconTwitter} from '../assets/twitter.svg'
import {ReactComponent as IconPin} from '../assets/pin.svg'
import {ReactComponent as IconSpeak} from '../assets/volume.svg'

//redux
import { useSelector, useDispatch } from 'react-redux';
import { addShortCut, setShortCut, removeShortCut } from '../redux/actions/ShortcutActions'


import db from '../database/news.json'

const NewsExpoItem = (props) => {
    const shortcuts = useSelector(state => state.ShortcutReducer)

    let isPinned = false
    shortcuts.forEach(shortcut => {
        if (shortcut.title === props.content.title && shortcut.type === "news") {
            console.log('pinned')
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
    return (
        <div className='news-expo__item'>
            <img src={'./assets/news/' + props.content.image}></img>
            <div className='news-expo__item__content'>
                <span>2 days ago</span>
                <h3>{props.content.title}</h3>
                <p className='news-expo__item__desc'>{props.content.description}</p>
                <div className='news-expo__item__social'>
                    <IconFacebook/>
                    <IconTwitter/>
                    <div className='news-expo__item__wrapper' onClick={toggleShortCutAction}><IconPin className={isPinned ? 'pinsvg--pinned-news': ''}/></div>

                    <div className='news-expo__item__wrapper' onClick={speak}><IconSpeak/></div>
                </div>
            </div>
        </div>
    )
}

const NewsExpo = () => {
    //console.log(db.data)
    return (
        <div className="news-expo">
            <div className="one"><NewsExpoItem content={db.data[0]}/></div>
            <div className="two"><NewsExpoItem content={db.data[1]}/></div>
            <div className="three"><NewsExpoItem content={db.data[2]}/></div>
            <div className="four">
                <a className="twitter-timeline" data-height="100%" data-theme="light" href="https://twitter.com/uniofeastanglia?ref_src=twsrc%5Etfw">Tweets by uniofeastanglia</a> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
            </div>
        </div>
    )
}

export default NewsExpo