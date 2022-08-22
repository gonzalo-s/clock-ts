import { combineReducers } from 'redux'
import clockReducer from './clockReducer'
import googleSignInReducer from './googleSignInReducer'

const reducers = combineReducers({
    clock: clockReducer,
    googleSignIn: googleSignInReducer,
})

export default reducers

export type State = ReturnType<typeof reducers>
