import React, {useEffect, useState} from 'react'
import {ReactComponent as IconClose} from '../assets/close.svg'
import {ReactComponent as IconNext} from '../assets/next.svg'
import {ReactComponent as IconBack} from '../assets/back.svg'
import {ReactComponent as IconDot} from '../assets/dot.svg'
import {ReactComponent as IconLanguage} from '../assets/language.svg'
import {ReactComponent as IconDy} from '../assets/abc-block.svg'
import {ReactComponent as IconAcc} from '../assets/wheelchair.svg'

//redux
import { useSelector, useDispatch } from 'react-redux';
import { toggleDy } from '../redux/actions/AccessibilityActions'
import { setStatus } from '../redux/actions/StatusActions'





const Accessibility = () => 
{

    const settings = useSelector(state => state.AccessibilityReducer)
    const dispatch = useDispatch()


    useEffect(() => {
        document.getElementById("model-accessibility").addEventListener("click", function( e ){
            e = window.event || e; 
            if(this === e.target) {
                hide()
            }
        });    
    }, [])

    const [fontSpacing, setFontSpacing] = useState(2.5)

    const hide = () => 
    {
        document.getElementById('model-accessibility').classList.remove('model__show')
        document.getElementById('model-accessibility').classList.add('model__hide')
    }

    function tgd() {
        const isChecked = document.getElementById("dyCheck").checked
        dispatch(toggleDy(document.getElementById("dyCheck").checked))
        dispatch(setStatus({
            'text': isChecked ? 'Dyslexia Mode On' : 'Dyslexia Mode Off',
            'action': () => {
                dispatch(setStatus(() => {tgd()}))
            }
        }))

      }

    const setFontSpacingFn = () => {
        //console.log(document.getElementById('spacing').value)
        setFontSpacing(document.getElementById('spacing').value)
    }

    const languageChange = () => {
        console.log('selected..')
        const lang = document.getElementById('language-option').value 
        dispatch(setStatus({
            'text': 'Language set to ' + lang,
            'action': () => {
                dispatch(setStatus(() => {}))
            }
        }))
    }

    //console.log(fontSpacing)

    return (
        <div id='model-accessibility' className='model'>
            <div className='model__content'>
                <div className='model__controls'>
                    <IconAcc className='button'/>
                    <h2>Accessibility</h2>
                    <IconClose className='button' onClick={hide}/>
                </div>
                <div className='accessibility'>
                    <div className='accessibility__item'>
                        <label><IconLanguage/>Language</label>
                        <select id="language-option" onChange={languageChange}>
                            <option value="Arabic">عربى</option>
                            <option value="English" selected={true}>English</option>
                            <option value="Español" >Español</option>
                            <option value="Français" >Français</option>
                            <option value="中文">中文</option>
                            <option value="हिंदी">हिंदी</option>
                        </select>
                    </div>
                    <div className='accessibility__item'>
                        <label><IconDy/>Dyslexia Mode</label>
                        <input type="checkbox" id="dyCheck" name="subscribe" value="newsletter" onChange={tgd}></input>
                    </div>
                    <div className='accessibility__dy' style={settings.isDy ? {display: "flex"} : {display: "none"}}>
                        <label style={{letterSpacing: fontSpacing + 'px'}}>Hello Nathan!</label>
                        <input type="range" id="spacing" name="vol" min="0" max="5" step=".1" value={fontSpacing}  onChange={setFontSpacingFn}></input>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Accessibility