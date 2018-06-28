import { combineReducers } from 'redux'
import homeData from './homeData'
import slidebarState from './slidebar'
import search from './search'
import radio from './radio'
import music from './music'

export default combineReducers({
    homeData,
    slidebarState,
    search,
    radio,
    music
})
