import React, { useState } from 'react'
import {ReactComponent as IconMenu} from '../assets/menu.svg'
import {ReactComponent as IconNight} from '../assets/night.svg'
import {ReactComponent as IconWheelchair} from '../assets/wheelchair.svg'
import {ReactComponent as IconDown} from '../assets/down.svg'
import {ReactComponent as IconPin} from '../assets/pin.svg'
import {ReactComponent as IconLogout} from '../assets/logout.svg'
import {ReactComponent as IconClose} from '../assets/close.svg'

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
        else {
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

    return (
        <div className="navigation">
            <div className='navigation__bar'>
                <span className='navigation__logo'>My UEA</span>
                <div className='navigation__links'>
                    <a>UEA Vacancies</a>
                    <a>News</a>
                    <a>Covid Lateral Testing</a>
                    <a>Help me with</a>
                    <a>Events</a>
                    <a>Faculties and Schools</a>
                    <a>Divisions</a>

                </div>
                <div>
                    <IconNight className='navigation__icon--theme'/>
                    <IconWheelchair className='navigation__icon--accessibility'/>
                    <IconMenu onClick={toggleSidemenu}/>
                </div>
            </div>

            <div id='sidemenu__background' className='sidemenu__background' onClick={toggleSidemenu}>
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
                    <a><IconPin className='pin-link'/>News<IconDown/></a>
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