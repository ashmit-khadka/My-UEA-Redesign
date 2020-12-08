import React from 'react'
import {ReactComponent as IconMenu} from '../assets/menu.svg'
import {ReactComponent as IconNight} from '../assets/night.svg'
import {ReactComponent as IconWheelchair} from '../assets/wheelchair.svg'

const Navigation = () => {
    return (
        <div className="navigation">
            <span>My UEA</span>
            <div>
                <a>UEA Vacancies</a>
                <a>News</a>
                <a>Covid Lateral Testing</a>
                <a>Help me with</a>
                <a>Evetns</a>
                <a>Faculties and Schools</a>
                <a>Divisions</a>

            </div>
            <div>
                <IconNight/>
                <IconWheelchair/>
                <IconMenu/>

            </div>
        </div>
    )
}

export default Navigation