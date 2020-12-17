import ShortcutReducer from './ShortcutReducer'
import HelpReducer from './HelpReducer'
import StatusReducer from './StatusReducer'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    ShortcutReducer:ShortcutReducer,
    HelpReducer: HelpReducer,
    StatusReducer: StatusReducer,
})

export default allReducers