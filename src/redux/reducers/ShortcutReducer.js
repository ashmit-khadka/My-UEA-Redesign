//redux
import { useSelector, useDispatch } from 'react-redux';
import { setStatus } from '../actions/StatusActions'


//reducer accepts action and changes the state accordingly
const initialShorcuts = [
    {
        "title": "UEA's Learning Portal",
        "type": "link",
        "imagePath": "/links/",
        "image": "blackboard-log-in.jpg"
    },
    {
        "title": "Learning and Teaching Service",
        "type": "link",
        "imagePath": "/links/",
        "image": "LTS-Students.jpg"
    },
    {
        "title": "CMP My School",
        "type": "link",
        "imagePath": "/links/",
        "image": "COMP-SCI-school.jpg"
    },
]

const ShortcutReducer = (shortcuts = initialShorcuts, action) => {
    switch (action.type) {
        case 'ADD_SHORTCUT':
            shortcuts = [...shortcuts, action.payload]
            //console.log('added shortcut..', shortcuts)
            return shortcuts
    
        case 'SET_REGRESSION_POINT':
            //console.log('setting points..', action.payload)
            shortcuts = action.payload
            return shortcuts

        case 'REMOVE_SHORTCUT':
            //console.log('removing shortcut..')
            shortcuts = shortcuts.filter(item => item.title !== action.payload.title)
            return shortcuts

        case 'UPDATE_REGRESSION_POINT':
            return shortcuts.map((point, index) => {
                if (point.id == action.payload.id) {
                    //console.log('changing value..', action.payload)
                    return {...point, value: action.payload.value}
                }
                return point
            })
                    
        default:
            return shortcuts
    }
}
export default ShortcutReducer