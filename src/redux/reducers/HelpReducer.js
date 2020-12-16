//reducer accepts action and changes the state accordingly
const initalType = 'SHORTCUT'

const HelpReducer = (helpType = initalType, action) => {
    switch (action.type) {
        case 'SET_HELP_SHORTCUT':
            helpType = 'SHORTCUT'
            return helpType
    
        case 'SET_HELP_PORTAL':
            helpType = 'PORTAL'
            return helpType  

        case 'SET_HELP_NEWS':
            helpType = 'NEWS'
            return helpType  

        case 'SET_HELP_EVENTS':
            helpType = 'EVENTS'
            return helpType  

        default:
            return helpType
    }
}
export default HelpReducer