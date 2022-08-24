import { combineReducers } from 'redux'
import clockReducer from './clockReducer'
import googleSignInReducer from './googleSignInReducer'
import calendarReducer from './calendarReducer'
import userData from './userReducer'

const reducers = combineReducers({
    clock: clockReducer,
    googleSignIn: googleSignInReducer,
    calendars: calendarReducer,
    user: userData,
})

export default reducers

export type State = ReturnType<typeof reducers>
