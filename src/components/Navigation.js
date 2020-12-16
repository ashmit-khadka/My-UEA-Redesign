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
        }
}

const Navigation = () => {

    const [sidemenu, setSidemenu] = useState(false)

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
    /*
    let sidemenu
    
    const getChildMenuItems = (navigationOptions) => {
        Object.keys(navigationOptions).map(option => {

        })
    }

    useEffect(() => {

    }, [])
    */

    return (
        <div className="navigation">
            <div className='navigation__bar'>
                <div className='navigation__dummy'></div>

                <span className='navigation__logo'>My UEA</span>
                <div className='navigation__links'>
                    <a>News</a>
                    <a>Covid 19</a>
                    <a>Help me with</a>
                    <a>Events</a>
                    <a>Faculties and Schools</a>

                </div>
                <div>
                    <IconSearch/>

                    <IconNight className='navigation__icon--theme'/>
                    <IconWheelchair className='navigation__icon--accessibility'/>
                    <IconMenu onClick={toggleSidemenu}/>
                </div>
            </div>

            <div id='sidemenu__background' className='sidemenu__background'>
                <div id='sidemenu' className='sidemenu'>
                    <div className='sidemenu__control'><IconClose onClick={toggleSidemenu}/></div>
                    <div className='sidemenu__profile'>
                        <img src='./assets/profile/profile-pic.jpg' ></img>
                        <span className='sidemenu__profile--name'>Ashmit Khadka</span>
                        <span className='sidemenu__profile--info'>Computing Science (CMP)</span>
                        <div>
                            <IconNight className='sidemenu__icon--theme'/>
                            <IconWheelchair className='sidemenu__icon--accessibility'/>
                            <IconLogout/>
                        </div>
                    </div>

                    <a><IconPin className='pin-link'/> My Dashboard</a>
                    <a><IconPin className='pin-link'/>UEA Vacancies</a>
                        <a><IconPin className='pin-link'/>News<IconDown onClick={() => expandSubmenu("news-sub-items")}/></a>
                        <div id='news-sub-items' className='sub-menu sub-menu-hide'>
                            <a>Latest News</a>
                            <a>Staff<IconDown onClick={() => expandSubmenu("news-staff-sub-items")}/></a>
                            <div id='news-staff-sub-items' className='sub-menu sub-menu-hide'>
                                <a>Staff Email Messages</a>
                            </div>
                            <a>Students<IconDown onClick={() => expandSubmenu("news-students-sub-items")}/></a>
                            <div id='news-students-sub-items' className='sub-menu sub-menu-hide'>
                                <a>Student Email Messages</a>
                            </div>
                            <a>Notices</a>
                            <a>Item C</a>
                        </div>
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

