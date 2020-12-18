import React, { useState } from 'react'
import dateFormat from 'dateformat'

import NewsExpo from './NewsExpo'
import LinksExpo from './LinksExpo'
import Evetns from './Events'
import {ReactComponent as IconInfo} from '../assets/information.svg'
import {ReactComponent as IconQuoteStart} from '../assets/quote-start.svg'
import {ReactComponent as IconQuoteEnd} from '../assets/quote-end.svg'
import {ReactComponent as IconPencil} from '../assets/pencil.svg'
import {ReactComponent as IconShortcut} from '../assets/molecular.svg'
import {ReactComponent as IconNewspaper} from '../assets/newspaper.svg'
import {ReactComponent as IconForeign} from '../assets/foreign.svg'
import {ReactComponent as IconEvents} from '../assets/event.svg'

import linksDB from '../database/links.json'
import Skeleton from 'react-loading-skeleton';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { addShortCut, setShortCut, removeShortCut } from '../redux/actions/ShortcutActions'
import { setHelpShortcut, setHelpProtal, setHelpNews, setHelpEvents } from '../redux/actions/HelpActions'


const Shortcut = (props) => {

    const [loading, setLoading] = useState(true)
    setTimeout(() => {setLoading(false)}, 2000)

    //if (props.link) console.log('./assets' + props.link.imagePath + props.link.image)
    const showShortcutModel = () => {
        console.log('hello??')
        document.getElementById('model-shortcut').classList.add('model__show')
    }
    const img = props.link ?  <img src={'./assets' + props.link.imagePath + props.link.image}></img> : <div className='shortcut__edit-wrapper'><IconPencil onClick={showShortcutModel}/></div>
    return (
        <div className='shortcut'>
            {loading ? <Skeleton circle={true} height={75} width={75} /> : img }
            {props.link && (loading ? <Skeleton width={75}/> : <span>{props.link.title}</span>)}
        </div>
    )
}

const Home = () => {

    const shortcuts = useSelector(state => state.ShortcutReducer)
    const dispatch = useDispatch()

    const date = dateFormat(new Date(), "dddd, dS mmm, yyyy");
    const speak = () => {
        var msg = new SpeechSynthesisUtterance('Hello World');
        window.speechSynthesis.speak(msg);
    }

    const showHelp = (action) => {
        dispatch(action())
        document.getElementById('model-help').classList.add('model__show')
    }

    const [loading, setLoading] = useState(true)
    setTimeout(() => {setLoading(false)}, 2000)

    return (
        <div id='screen-home' className='home'>
            <div className='home__welcome'>
                <div className='home__welcome-left'>
                    <h1 className='home__welcome-message'>{loading ? <Skeleton width={250}/> : 'Good Morning Nathan!'}</h1>
                    <h1 className='home__welcome-day'>{loading ? <Skeleton/> : date}</h1>
                </div>

                <div className='home__welcome-right'>
                    <IconQuoteStart className='home__welcome__quote-start'/>
                    <IconQuoteEnd className='home__welcome__quote-end'/>
                    <span className='home__welcome-quote'>{
                        loading ? <Skeleton width={1000} /> :
                        'All our knowledge begins with the senses, proceeds then to the understanding, and ends with reason. \nThere is nothing higher than reason. –Immanuel Kant'
                    }</span>

                </div>
            </div>
            <div className='section' id='section-shortcuts'>
                <div className='section__header'>

                    <h2 className='section--shortcuts'>My Shortcuts
                    </h2>
                    <IconInfo className='button' onClick={() => showHelp(setHelpShortcut)}/>
                </div>
                <div className="section__content shortcut-grid flex-row">
                    {
                        shortcuts.map((shortcut, index) => {
                            //console.log(shortcut)
                            return <Shortcut key={index+1} link={shortcut}/>
                        })
                    }
                    <Shortcut key={0}/>
                </div>
            </div>

            <div id='section-portal' className='section'>
                <div className='section__header'>
                    <h2 className='section--portal'>Portal
                    </h2>
                    <IconInfo className='button' onClick={() => showHelp(setHelpProtal)}/>
                </div>
                <div className="section__content">
                    <LinksExpo/>
                </div>
            </div>
                    
            <div id='section-news' className='section'>
                <div className='section__header'>
                    <h2 className='section--news'>Latest News
                    </h2>
                    <IconInfo className='button' onClick={() => showHelp(setHelpNews)}/>
                </div>
                <div className="section__content">
                    <NewsExpo/>
                </div>
            </div>
            <div id='section-events' className='section'>
                <div className='section__header'>
                    <h2 className='section--events'>Events
                    </h2>
                    <IconInfo className='button' onClick={() => showHelp(setHelpEvents)}/>
                </div>
                <div className="section__content">
                    <Evetns/>
                </div>
            </div>
                    

        </div>
    )
}


export default Home