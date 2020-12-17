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
        }
}

const Navigation = () => {

    const [sidemenu, setSidemenu] = useState(false)
    const [darkMode, setDarkMode] = useState(false)

    const showShearch = () => {
        //document.getElementById('model-search').classList.remove('model__hide')
        document.getElementById('model-search').classList.add('model__show')
    }


    const showAccessibility = () => {
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
        document.getElementById('root').classList.toggle('root__dark')
        document.getElementById('screen-home').classList.toggle('home__dark')
        document.getElementById('navigation').classList.toggle('navigation__dark')
        document.getElementById('links-expo').classList.toggle('links__dark')
        setDarkMode(!darkMode)
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

    const buildLayerMain = (options) => {
        let elemets = []
        for (const [key, value] of Object.entries(options)) {
            //console.log(`${key}: ${value}`);
            //
            if (typeof value === 'object' && value !== null & Object.keys(value).length > 0) {
                let group = []
                const smName = key.replace(' ', '-').toLowerCase()+'-sm-main'
                group.push(<a>{key}<IconDown onClick={() => expandSubmenu(smName)}/></a>)                
                const subElements = buildLayer(value)
                group.push(<div id={smName} className='sub-menu sub-menu-hide'>{subElements}</div>)                
                //console.log(smName)

                elemets.push(<div className='navigation__section'>{group}</div>)
            } else {
                elemets.push(<div className='navigation__section'><a>{key}</a></div>)
            }
            
        }
        return {elemets}
    }

    const navv = buildLayer(navigationOptions)
    const fullNav = buildLayerMain(navigationOptions)

    //console.log('nav', navv)


    return (
        <div id='navigation' className="navigation">
            <div className='navigation__bar'>
                <div className='navigation__main'>
                    <div className='navigation__dummy'>
                        <IconSearch className='navigation__icon--search-main' onClick={showShearch}/>
                    </div>

                    <span className='navigation__logo'>My UEA</span>
                    <div className='navigation__links'>
                        <a href='#'>Covid 19<IconDown/></a>
                        
                        <a href='#'>News<IconDown/></a>
                        <a href='#'>Social<IconDown/></a>
                        <a href='#'>Learn<IconDown/></a>
                        <a href='#'>Help<IconDown/></a>                    
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
                            <IconNight className='sidemenu__icon--theme'/>
                            <IconWheelchair className='sidemenu__icon--accessibility' onClick={showAccessibility}/>
                            <IconLogout/>
                        </div>
                    </div>


                    {navv}
                    <a><IconPin className='pin-link'/>Covid Lateral Testing<IconDown/></a>
                    <a><IconPin className='pin-link'/>Covid Testing - Placement Students<IconDown/></a>
                    <a><IconPin className='pin-link'/>Help Me With<IconDown/></a>
                    <a><IconPin className='pin-link'/>Events<IconDown/></a>
                    <a><IconPin className='pin-link'/>Facuties and Schools<IconDown/></a>
                    <a><IconPin className='pin-link'/>Divisions<IconDown/></a>
                    <a><IconPin className='pin-link'/>UEA Systems<IconDown/></a>
                    <a><IconPin className='pin-link'/>Log an it Call<IconDown/></a>
                    <a><IconPin className='pin-link'/>Communities<IconDown/></a>
                    <a><IconPin className='pin-link'/>Directories<IconDown/></a>
                    <a><IconPin className='pin-link'/>Campus Map<IconDown/></a>

                
                </div>
            </div>
        </div>
    )
}

export default Navigation

