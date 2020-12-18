//reducer accepts action and changes the state accordingly
const initialAccessibility = {
    'language': 'English',
    'isDy': false
}

const AccessibilityReducer = (settings = initialAccessibility, action) => {
    switch (action.type) {
        case 'SET__LANGUAGE':
            return { ...settings, language: action.payload };
    
        case 'TOGGLE__DY':
            console.log('toggle dy..')
            return { ...settings, isDy: action.payload };

        default:
            return settings
    }
}
export default AccessibilityReducer