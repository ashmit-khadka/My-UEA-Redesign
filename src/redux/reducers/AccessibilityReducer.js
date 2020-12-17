//reducer accepts action and changes the state accordingly
const initialAccessibility = {
    'dxl': 'false'
}

const AccessibilityReducer = (shortcuts = initialShorcuts, action) => {
    switch (action.type) {
        case 'SET_DXL':
            shortcuts = [...shortcuts, action.payload]
            console.log('added shortcut..', shortcuts)
            return shortcuts
    
        case 'SET_REGRESSION_POINT':
            console.log('setting points..', action.payload)
            shortcuts = action.payload
            return shortcuts

        case 'REMOVE_SHORTCUT':
            console.log('removing shortcut..')
            shortcuts = shortcuts.filter(item => item.title !== action.payload.title)
            return shortcuts

        case 'UPDATE_REGRESSION_POINT':
            return shortcuts.map((point, index) => {
                if (point.id == action.payload.id) {
                    console.log('changing value..', action.payload)
                    return {...point, value: action.payload.value}
                }
                return point
            })
                    
        default:
            return shortcuts
    }
}
export default AccessibilityReducer