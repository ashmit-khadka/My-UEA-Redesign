//reducer accepts action and changes the state accordingly
const initialStatus = {
    'text': '',
    'action': () => {console.log('no action')}
}

const ShortcutReducer = (status = initialStatus, action) => {
    switch (action.type) {
        case 'SET_STATUS':            
            status = action.payload
            //console.log('set status..', status)
            return status
        default:
            return status
    }
}
export default ShortcutReducer