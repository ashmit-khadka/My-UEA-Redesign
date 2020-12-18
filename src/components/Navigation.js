import React, { useState, useEffect } from 'react'
import {ReactComponent as IconMenu} from '../assets/menu.svg'
import {ReactComponent as IconNight} from '../assets/night.svg'
import {ReactComponent as IconWheelchair} from '../assets/wheelchair.svg'
import {ReactComponent as IconDown} from '../assets/down.svg'
import {ReactComponent as IconPin} from '../assets/pin.svg'
import {ReactComponent as IconLogout} from '../assets/logout.svg'
import {ReactComponent as IconClose} from '../assets/close.svg'
import {ReactComponent as IconNode} from '../assets/node.svg'
import {ReactComponent as IconSearch} from '../assets/loupe.svg'
//redux
import { useSelector, useDispatch } from 'react-redux';
import { setStatus } from '../redux/actions/StatusActions'


const navigationOptions = {
        "My Dashboard": {},
        "UEA Vacancies": {},
        "News": {
            "Latest News": {},
            "Staff": {
                "Staff Email Messages": {}
            },
            "Students": {
                "Student Email Messages": {}
            },
            "Notices": {}
        },
        "Covid Lateral Testing": {
            "How lateral testing works":{},
            "Travelling after testing": {},
            "Lateral Testing FAQs": {}
        },
        "Covid Testing - Placements Students": {
            "Frequently Asked Questions": {},
            "Step-by-step guide": {
                "Step 1": {},
                "Step 2": {},
                "Step 3": {},
                "Step 4": {},
                "Step 5": {},
                "Step 6": {},
            },
            "Consent Statement": {},
            "Privacy Notice": {},
            "Connecting to the VPN": {}
        },
        "Help Me With": {
            "Introduction to My.UEA": {},
            "My Wellbeing": {
                "Students": {},
                "Staff": {}
            },
            "Being a New Student": {},
            "Being a New Staff Member": {},
            "Learning": {}
        },
        "Events": {
            "Listing": {}
        },
        " Vice-Chancellor's Office": {
            "Vice-Chancellor": {},
            "The Executive Team": {}
        },
        "Faculties and Schools": {
            "Faculty of Arts and Humanities": {},
            "Faculty of Medicine and Health Sciences": {},
            "Faculty of Science": {},
            "Faculty of Social Sciences": {}
        },
        "Divisions and Services": {
            "Admissions, Recruitment and Marketing": {},
            "Development, Partnerships and Music Centre": {},
            "Estates": {}
        },
        "UEA Systems": {
            "Attendance": {},
            "Outlook": {},
            "Office 365": {},
            "Blackboard": {},
            "e:Vision": {}
        },
        "Log an IT Call": {},
        "Communities": {
            "RESNET": {},
            "RSConnect": {},
            "Retirement Association": {}
        },
        "Directories": {},
        "Campus Map": {},
}
let darkMode = false
const Navigation = () => {
    const dispatch = useDispatch()

    const [sidemenu, setSidemenu] = useState(false)
    //const [darkMode, setDarkMode] = useState(false)

    const showShearch = () => {
        //document.getElementById('model-search').classList.remove('model__hide')
        document.getElementById('model-search').classList.add('model__show')
    }


    const showAccessibility = () => {
        if (sidemenu) toggleSidemenu()
        //document.getElementById('model-accessibility').classList.remove('model__hide')
        document.getElementById('model-accessibility').classList.add('model__show')
    }

    const toggleSidemenu = () => {
        if (!sidemenu)
        {
            console.log('opening..')
            document.getElementById('sidemenu').classList.add('animate-sidemenu-open')
            document.getElementById('sidemenu__background').classList.add('animate-sidemenu-wrapper-open')
            document.getElementById('sidemenu').classList.remove('animate-sidemenu-close')
            document.getElementById('sidemenu__background').classList.remove('animate-sidemenu-wrapper-close')
        }
        else 
        {
            console.log('closing..')
            document.getElementById('sidemenu').classList.remove('animate-sidemenu-open')
            document.getElementById('sidemenu__background').classList.remove('animate-sidemenu-wrapper-open')
            document.getElementById('sidemenu').classList.add('animate-sidemenu-close')
            document.getElementById('sidemenu__background').classList.add('animate-sidemenu-wrapper-close')
            setTimeout(() => {
                //document.getElementById('sidemenu__background').style.display = "hidden"
            }, 2000);
        }
        setSidemenu(!sidemenu)

    }


    const expandSubmenu = (id) => {
        document.getElementById(id).classList.toggle('sub-menu-hide')
    }

    const toggleDarkMode = () => {
        if (sidemenu) toggleSidemenu()
        document.getElementById('root').classList.toggle('root__dark')
        document.getElementById('screen-home').classList.toggle('home__dark')
        document.getElementById('navigation').classList.toggle('navigation__dark')
        document.getElementById('links-expo').classList.toggle('links__dark')
        document.getElementById('dock').classList.toggle('dock__dark')
        //setDarkMode(!darkMode)
        darkMode = !darkMode
        dispatch(setStatus({
            'text': darkMode ? 'Dark Mode Enabled' : 'Light Mode Enabled',
            'action': () => {
                toggleDarkMode()
            }
        }))

    }


    /*
    let sidemenu
    
    const getChildMenuItems = (navigationOptions) => {
        Object.keys(navigationOptions).map(option => {

        })
    }

    useEffect(() => {

    }, [])
    */

    const buildLayer = (options) => {
        let elemets = []
        for (const [key, value] of Object.entries(options)) {
            //console.log(`${key}: ${value}`);
            //
            if (typeof value === 'object' && value !== null & Object.keys(value).length > 0) {
                const smName = key.replace(' ', '-').toLowerCase()+'-sm'
                elemets.push(<a>{key}<IconDown onClick={() => expandSubmenu(smName)}/></a>)                
                const subElements = buildLayer(value)
                elemets.push(<div id={smName} className='sub-menu sub-menu-hide'>{subElements}</div>)                
                //console.log(smName)
            } else {
                elemets.push(<a>{key}</a>)
            }
            
        }
        return elemets
    }

    const buildLayerMain = (options, menus) => {
        let elemets = []
        for (const [key, value] of Object.entries(options)) {
            console.log(`options: ${menus} for : ${key} is.. ${menus.includes(key)}`);
            if (menus.includes(key))
            {
                if (typeof value === 'object' && value !== null & Object.keys(value).length > 0) {
                    const smName = key.replace(' ', '-').toLowerCase()+'-sm'
                    elemets.push(<a>{key}<IconDown onClick={() => expandSubmenu(smName)}/></a>)                
                    const subElements = buildLayer(value)
                    elemets.push(<div id={smName} className='sub-menu sub-menu-hide'>{subElements}</div>)                
                    //console.log(smName)
                } else {
                    elemets.push(<a>{key}</a>)
                }
            }
            
        }
        return elemets
    }

    const navv = buildLayer(navigationOptions)
    const navCovid = buildLayerMain(navigationOptions, [
        "Covid Lateral Testing",
        "Covid Testing - Placements Students",
    ])

    const navNews = buildLayerMain(navigationOptions, [
        "News",
        "Vacancies",
        "Directories",
    ])

    const navSocial = buildLayerMain(navigationOptions, [
        "Events",
        "Communities",
    ])

    const navLearn = buildLayerMain(navigationOptions, [
        "UEA Systems",
        "Vice-Chancellor's Office",
        "Faculties and Schools",
        "Divisions and Services",
    ])

    const navHelp = buildLayerMain(navigationOptions, [
        "Help Me With",
        "Log an IT Call",
        "Campus Map"
    ])

    //console.log('nav', navv)
    const showSection = (id) => {
        //console.log('hi...')
        document.getElementById(id).classList.add('bar-show')
    }

    const hideSection = (id) => {
        //console.log('hi...')
        document.getElementById(id).classList.remove('bar-show')
    }

    return (
        <div id='navigation' className="navigation">
            <div className='navigation__bar'>
                <div className='navigation__main'>
                    <div className='navigation__dummy'>
                        <IconSearch className='navigation__icon--search-main' onClick={showShearch}/>
                    </div>

                    <span className='navigation__logo'>My UEA</span>
                    <div className='navigation__links'>
                        <div className='bar-link' onMouseEnter={() => showSection('bar-covid')} onMouseLeave={() => hideSection('bar-covid')}>
                            <a href='#'>Covid 19<IconDown/></a> 
                            <div id={'bar-covid'} className='bar-link__links' onMouseLeave={() => hideSection('bar-covid')} onMouseEnter={() => showSection('bar-covid')} >
                                {navCovid}
                            </div>
                        </div>

                        <div className='bar-link' onMouseEnter={() => showSection('bar-News')} onMouseLeave={() => hideSection('bar-News')}>
                            <a href='#'>News<IconDown/></a> 
                            <div id={'bar-News'} className='bar-link__links' onMouseLeave={() => hideSection('bar-News')} onMouseEnter={() => showSection('bar-News')} >
                                {navNews}
                            </div>
                        </div>

                        <div className='bar-link' onMouseEnter={() => showSection('bar-Social')} onMouseLeave={() => hideSection('bar-Social')} >
                            <a href='#'>Social<IconDown/></a> 
                            <div id={'bar-Social'} className='bar-link__links' onMouseLeave={() => hideSection('bar-Social')} onMouseEnter={() => showSection('bar-Social')}>
                                {navSocial}
                            </div>
                        </div>

                        <div className='bar-link' onMouseEnter={() => showSection('bar-Learn')} onMouseLeave={() => hideSection('bar-Learn')}>
                            <a href='#'>Learn<IconDown/></a> 
                            <div id={'bar-Learn'} className='bar-link__links' onMouseLeave={() => hideSection('bar-Learn')} onMouseEnter={() => showSection('bar-Learn')}>
                                {navLearn}
                            </div>
                        </div>

                        <div className='bar-link' onMouseEnter={() => showSection('bar-help')} onMouseLeave={() => hideSection('bar-help')}>
                            <a href='#'>Help<IconDown/></a> 
                            <div id={'bar-help'} className='bar-link__links' onMouseLeave={() => hideSection('bar-help')} onMouseEnter={() => showSection('bar-help')}>
                                {navHelp}
                            </div>
                        </div>                 
                    </div>
                    <div className='navigation__control'>
                        <button><IconSearch href='#' className='navigation__icon--search' onClick={showShearch}/></button>

                        <IconNight className='navigation__icon--theme' onClick={toggleDarkMode}/>
                        <IconWheelchair className='navigation__icon--accessibility' onClick={showAccessibility}/>
                        <IconMenu className='navigation__icon--menu' onClick={toggleSidemenu}/>
                        <IconLogout className='navigation__icon--logout'/>
                        <img className='navigation__icon--profile' src='./assets/profile/profile-pic.jpg' ></img>

                    </div>
                </div>


                <div className='navigation__more'>
                </div>
            </div>

   


            <div id='sidemenu__background' className='sidemenu__background'>
                <div id='sidemenu' className='sidemenu'>
                    <div className='sidemenu__control'><IconClose onClick={toggleSidemenu}/></div>
                    <div className='sidemenu__profile'>
                        <img src='./assets/profile/profile-pic.jpg' ></img>
                        <span className='sidemenu__profile--name'>Nathan Redmond</span>
                        <span className='sidemenu__profile--info'>Computing Science (CMP)</span>
                        <div>
                            <IconNight className='sidemenu__icon--theme' onClick={toggleDarkMode}/>
                            <IconWheelchair className='sidemenu__icon--accessibility' onClick={showAccessibility}/>
                            <IconLogout/>
                        </div>
                    </div>


                    {navv}
              
                    <a><IconPin className='pin-link'/>Campus Map<IconDown/></a>

                
                </div>
            </div>
        </div>
    )
}

export default Navigation

