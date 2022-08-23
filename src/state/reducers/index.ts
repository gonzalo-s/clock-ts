import { combineReducers } from 'redux'
import clockReducer from './clockReducer'
import googleSignInReducer from './googleSignInReducer'
import calendarReducer from './calendarReducer'

const reducers = combineReducers({
    clock: clockReducer,
    googleSignIn: googleSignInReducer,
    calendars: calendarReducer,
})

export default reducers

export type State = ReturnType<typeof reducers>
