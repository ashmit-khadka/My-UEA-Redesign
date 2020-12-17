import React, {useEffect} from 'react'
import {ReactComponent as IconClose} from '../assets/close.svg'
import {ReactComponent as IconNext} from '../assets/next.svg'
import {ReactComponent as IconBack} from '../assets/back.svg'
import {ReactComponent as IconDot} from '../assets/dot.svg'

//redux
import { useSelector, useDispatch } from 'react-redux';
import { setHelpShortcut, setHelpProtal, setHelpNews, setHelpEvents } from '../redux/actions/HelpActions'





const Accessibility = () => 
{

    useEffect(() => {
        document.getElementById("model-accessibility").addEventListener("click", function( e ){
            e = window.event || e; 
            if(this === e.target) {
                hide()
            }
        });    
    }, [])


    const hide = () => 
    {
        document.getElementById('model-accessibility').classList.remove('model__show')
        document.getElementById('model-accessibility').classList.add('model__hide')
    }

    return (
        <div id='model-accessibility' className='model'>
            <div className='model__content'>
                <div className='model__controls'>
                    <IconClose className='button' onClick={hide}/>
                </div>
                <div className='accessibility'>
                    <div className=''>
                        <h4>Language</h4>
                        <select name="cars" id="cars">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>
                    <div className=''>
                        <h4>Dyslexia Mode</h4>
                        <input type="checkbox" id="subscribeNews" name="subscribe" value="newsletter"></input>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Accessibility