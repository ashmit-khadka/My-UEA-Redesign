import React from 'react'
import {ReactComponent as IconClose} from '../assets/close.svg'
import {ReactComponent as IconNext} from '../assets/next.svg'
import {ReactComponent as IconBack} from '../assets/back.svg'
import {ReactComponent as IconDot} from '../assets/dot.svg'

//redux
import { useSelector, useDispatch } from 'react-redux';
import { setHelpShortcut, setHelpProtal, setHelpNews, setHelpEvents } from '../redux/actions/HelpActions'


const helpContent = {
    "SHORTCUT": {
        "title": "My Shortcuts",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus metus ut lorem dictum commodo. Sed convallis, orci sed imperdiet congue, mi erat maximus purus, ut mattis eros sem congue nisl. Duis eget leo eget ipsum vehicula congue. Nullam nibh sapien, pellentesque quis placerat ac, volutpat in dui. Ut non eros nulla. Maecenas volutpat quam augue, consectetur dignissim orci cursus vitae. Etiam placerat ex mollis finibus malesuada. Nulla facilisi. Sed in sem quis justo vulputate pretium.",
        "action": setHelpShortcut
    },
    "PORTAL": {
        "title": "Portal",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus metus ut lorem dictum commodo. Sed convallis, orci sed imperdiet congue, mi erat maximus purus, ut mattis eros sem congue nisl. Duis eget leo eget ipsum vehicula congue. Nullam nibh sapien, pellentesque quis placerat ac, volutpat in dui. Ut non eros nulla. Maecenas volutpat quam augue, consectetur dignissim orci cursus vitae. Etiam placerat ex mollis finibus malesuada. Nulla facilisi. Sed in sem quis justo vulputate pretium.",
        "action": setHelpProtal
    },
    "NEWS": {
        "title": "News",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus metus ut lorem dictum commodo. Sed convallis, orci sed imperdiet congue, mi erat maximus purus, ut mattis eros sem congue nisl. Duis eget leo eget ipsum vehicula congue. Nullam nibh sapien, pellentesque quis placerat ac, volutpat in dui. Ut non eros nulla. Maecenas volutpat quam augue, consectetur dignissim orci cursus vitae. Etiam placerat ex mollis finibus malesuada. Nulla facilisi. Sed in sem quis justo vulputate pretium.",
        "action": setHelpNews
    },
    "EVENTS": {
        "title": "Events",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus metus ut lorem dictum commodo. Sed convallis, orci sed imperdiet congue, mi erat maximus purus, ut mattis eros sem congue nisl. Duis eget leo eget ipsum vehicula congue. Nullam nibh sapien, pellentesque quis placerat ac, volutpat in dui. Ut non eros nulla. Maecenas volutpat quam augue, consectetur dignissim orci cursus vitae. Etiam placerat ex mollis finibus malesuada. Nulla facilisi. Sed in sem quis justo vulputate pretium.",
        "action": setHelpEvents
    }
}


const Help = () => 
{

    const helpType = useSelector(state => state.HelpReducer)
    const dispatch = useDispatch()

    const hide = () => 
    {
        document.getElementById('model-help').classList.add('model__hide')
    }


    const getNextPreviousHelp = (key) => {        
        const currentIndex = Object.keys(helpContent).indexOf(key)
        return {
            "previous": Object.keys(helpContent)[currentIndex-1],
            "next": Object.keys(helpContent)[currentIndex+1],
            "current": Object.keys(helpContent)[currentIndex]
        }
    }

    const context = getNextPreviousHelp(helpType)
    const previousType = getNextPreviousHelp(helpType).previous
    const nextType = getNextPreviousHelp(helpType).next

    const nextButton = () => {
        if (nextType !== undefined) {
            return <button onClick={() => dispatch(helpContent[nextType].action())}>{helpContent[nextType].title}<IconNext className='button'/></button>
        }
        return <button><IconNext className='button button--disabled'/></button>

    }

    const previousButton = () => {
        if (previousType !== undefined) {
            return <button onClick={() => dispatch(helpContent[previousType].action())}><IconBack className='button'/>{helpContent[previousType].title}</button>
        }
        return <button><IconBack className='button button--disabled'/></button>

    }


        


    //const getNextHelp(helpType)
    console.log('next type', nextType)

    const nextHelpText = <span>{}</span>

    return (
        <div id='model-help' className='model model__hide'>
            <div className='model__content'>
                <div className='model__controls'>
                    <IconClose className='button' onClick={hide}/>
                </div>
                <div className='model__help'>
                    <div>
                        <h2>{helpContent[helpType].title}</h2>
                        <p>{helpContent[helpType].text}</p>
                    </div>
                    <div className='model__help__controls'>
                        {previousButton()}
                        {
                            Object.keys(helpContent).map(index => {
                                console.log()
                                return <IconDot className={context.current == index ? 'button model__help__dot model__help__dot--active' : 'button model__help__dot'}/>
                            })
                        }
                        {nextButton()}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Help