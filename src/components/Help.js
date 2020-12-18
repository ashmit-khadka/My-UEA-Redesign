import React, { useEffect } from 'react'
import {ReactComponent as IconClose} from '../assets/close.svg'
import {ReactComponent as IconNext} from '../assets/next.svg'
import {ReactComponent as IconBack} from '../assets/back.svg'
import {ReactComponent as IconDot} from '../assets/dot.svg'
import {ReactComponent as IconHelp} from '../assets/information.svg'

//redux
import { useSelector, useDispatch } from 'react-redux';
import { setHelpShortcut, setHelpProtal, setHelpNews, setHelpEvents } from '../redux/actions/HelpActions'


const helpContent = {
    "SHORTCUT": {
        "title": "My Shortcuts",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus metus ut lorem dictum commodo. Sed convallis, orci sed imperdiet congue, mi erat maximus purus, ut mattis eros sem congue nisl. Duis eget leo eget ipsum vehicula congue. Nullam nibh sapien, pellentesque quis placerat ac, volutpat in dui. Ut non eros nulla. Maecenas volutpat quam augue, consectetur dignissim orci cursus vitae. Etiam placerat ex mollis finibus malesuada. Nulla facilisi. Sed in sem quis justo vulputate pretium.",
        "action": setHelpShortcut,
        "id": "section-shortcuts",
    },
    "PORTAL": {
        "title": "Portal",
        "text": "Eu mi bibendum neque egestas congue quisque. Pretium lectus quam id leo in vitae turpis. Aliquam eleifend mi in nulla posuere. Sociis natoque penatibus et magnis dis. Tempus urna et pharetra pharetra massa massa. Tellus integer feugiat scelerisque varius morbi. Facilisi cras fermentum odio eu. Platea dictumst quisque sagittis purus sit amet volutpat. Et magnis dis parturient montes nascetur. Rhoncus urna neque viverra justo nec ultrices dui.        ",
        "action": setHelpProtal,
        "id": "section-portal",
    },
    "NEWS": {
        "title": "News",
        "text": "Consequat mauris nunc congue nisi. Dui faucibus in ornare quam viverra orci sagittis eu. Ullamcorper malesuada proin libero nunc consequat interdum. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper. Risus nullam eget felis eget nunc lobortis mattis. Erat nam at lectus urna. Facilisi etiam dignissim diam quis enim. Sagittis vitae et leo duis ut diam quam. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris. Facilisis volutpat est velit egestas dui id ornare arcu. Metus dictum at tempor commodo ullamcorper. Et ultrices neque ornare aenean euismod elementum. Sapien nec sagittis aliquam malesuada. Tellus at urna condimentum mattis. Vulputate odio ut enim blandit volutpat maecenas. Egestas congue quisque egestas diam in. Fermentum iaculis eu non diam. Quis hendrerit dolor magna eget.",
        "action": setHelpNews,
        "id": "section-news",
    },
    "EVENTS": {
        "title": "Events",
        "text": "Accumsan lacus vel facilisis volutpat est velit egestas dui id. Porttitor eget dolor morbi non. Ac feugiat sed lectus vestibulum mattis. Bibendum arcu vitae elementum curabitur vitae nunc sed. Lacinia at quis risus sed vulputate odio ut. Felis donec et odio pellentesque diam volutpat commodo sed egestas. Quis imperdiet massa tincidunt nunc pulvinar. Non nisi est sit amet facilisis magna. Dis parturient montes nascetur ridiculus mus. Venenatis a condimentum vitae sapien pellentesque habitant. Odio eu feugiat pretium nibh ipsum consequat nisl vel pretium. Purus in massa tempor nec feugiat nisl pretium fusce id. Vitae tempus quam pellentesque nec nam. Etiam tempor orci eu lobortis. In pellentesque massa placerat duis ultricies lacus. Id ornare arcu odio ut sem.",
        "action": setHelpEvents,
        "id": "section-events",
    }
}

const sections = [
    {
        "title": "My Shortcuts",
        "id": "section-shortcuts",

    },    
    {
        "title": "Portal",
        "id": "section-portal",
    },
    {
        "title": "Latest News",
        "id": "section-news",
    },
    {
        "title": "Evetns",
        "id": "section-events",
    },
]


const Help = () => 
{

    const helpType = useSelector(state => state.HelpReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        document.getElementById("model-help").addEventListener("click", function( e ){
            e = window.event || e; 
            if(this === e.target) {
                hide()
            }
        });    
    }, [])

    const hide = () => 
    {
        document.getElementById('model-help').classList.remove('model__show')
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
            return <button onClick={() => {dispatch(helpContent[nextType].action()); scroll(nextType) }}>{helpContent[nextType].title}<IconNext className='button'/></button>
        }
        return <button><IconNext className='button button--disabled'/></button>

    }

    const previousButton = () => {
        if (previousType !== undefined) {
            return <button onClick={() => {dispatch(helpContent[previousType].action()); scroll(previousType)}}><IconBack className='button'/>{helpContent[previousType].title}</button>
        }
        return <button><IconBack className='button button--disabled'/></button>

    }


    const scroll = (newType) => {
        const section = document.getElementById(helpContent[newType].id);
        const sectionPosition = section.offsetTop;
        window.scrollTo({
            top: sectionPosition-100,
            behavior: "smooth"
        });
    }


    //const getNextHelp(helpType)
    console.log('next type', nextType)

    const nextHelpText = <span>{}</span>

    return (
        <div id='model-help' className='model'>
            <div className='model__content'>
                <div className='model__controls'>
                    <IconHelp className='button'/>
                    <h2></h2>
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
                                return <IconDot key={index} className={context.current == index ? 'button model__help__dot model__help__dot--active' : 'button model__help__dot'}/>
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