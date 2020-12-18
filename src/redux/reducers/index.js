import ShortcutReducer from './ShortcutReducer'
import HelpReducer from './HelpReducer'
import StatusReducer from './StatusReducer'
import AccessibilityReducer from './AccessibilityReducer'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    ShortcutReducer:ShortcutReducer,
    HelpReducer: HelpReducer,
    StatusReducer: StatusReducer,
    AccessibilityReducer: AccessibilityReducer
})

export default allReducers