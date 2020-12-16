import React from 'react'
import dateFormat from 'dateformat'

import NewsExpo from './NewsExpo'
import LinksExpo from './LinksExpo'
import Evetns from './Events'
import Shortcuts from './Shortcuts'
import {ReactComponent as IconInfo} from '../assets/information.svg'
import {ReactComponent as IconQuoteStart} from '../assets/quote-start.svg'
import {ReactComponent as IconQuoteEnd} from '../assets/quote-end.svg'
import {ReactComponent as IconPencil} from '../assets/pencil.svg'

import linksDB from '../database/links.json'

//redux
import { useSelector, useDispatch } from 'react-redux';
import { addShortCut, setShortCut, removeShortCut } from '../redux/actions/ShortcutActions'
import { setHelpShortcut, setHelpProtal, setHelpNews, setHelpEvents } from '../redux/actions/HelpActions'


const Shortcut = (props) => {

    //if (props.link) console.log('./assets' + props.link.imagePath + props.link.image)
    const showShortcutModel = () => {
        console.log('hello??')
        document.getElementById('shortcut__model').classList.remove('model__hide')
    }

    const img = props.link ?  <img src={'./assets' + props.link.imagePath + props.link.image}></img> : <div className='shortcut__edit-wrapper'><IconPencil onClick={showShortcutModel}/></div>
    return (
        <div className='shortcut'>
            {img}
            {props.link && <span>{props.link.title}</span>}
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
        document.getElementById('model-help').classList.remove('model__hide')
    }

    return (
        <div className='home'>
            <Shortcuts/>
            <div className='home__welcome'>
                <div className='home__welcome-left'>
                    <h1 className='home__welcome-message'>Good Morning Ashmit!</h1>
                    <h1 className='home__welcome-day'>{date}</h1>
                </div>

                <div className='home__welcome-right'>
                    <IconQuoteStart className='home__welcome__quote-start'/>
                    <IconQuoteEnd className='home__welcome__quote-end'/>
                    <span className='home__welcome-quote'>This is some random inspirational quote that will brighten up mood and create some kind of motivation. - Ash</span>

                </div>
            </div>
            <div className='section' id='section-shortcuts'>
                <div className='section__header'>
                    <h2>My Shortcuts
                    </h2>
                    <IconInfo onClick={() => showHelp(setHelpShortcut)}/>
                </div>
                <div className="section__content shortcut-grid flex-row">
                    {
                        shortcuts.map(shortcut => {
                            //console.log(shortcut)
                            return <Shortcut link={shortcut}/>
                        })
                    }
                    <Shortcut/>
                </div>
            </div>

            <div id='section-portal' className='section'>
                <div className='section__header'>
                    <h2>Portal
                    </h2>
                    <IconInfo onClick={() => showHelp(setHelpProtal)}/>
                </div>
                <div className="section__content">
                    <LinksExpo/>
                </div>
            </div>
                    
            <div id='section-news' className='section'>
                <div className='section__header'>
                    <h2>Latest News
                    </h2>
                    <IconInfo onClick={() => showHelp(setHelpNews)}/>
                </div>
                <div className="section__content">
                    <NewsExpo/>
                </div>
            </div>
            <div id='section-events' className='section'>
                <div className='section__header'>
                    <h2>Events
                    </h2>
                    <IconInfo onClick={() => showHelp(setHelpEvents)}/>
                </div>
                <div className="section__content">
                </div>
            </div>
  

        </div>
    )
}


export default Home