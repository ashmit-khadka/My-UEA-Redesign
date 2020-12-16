import ShortcutReducer from './ShortcutReducer'
import HelpReducer from './HelpReducer'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    ShortcutReducer:ShortcutReducer,
    HelpReducer: HelpReducer
})

export default allReducers