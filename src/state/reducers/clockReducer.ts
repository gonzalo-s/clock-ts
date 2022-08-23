import { ClockTypes, ActionClock } from '../types/clockTypes'

interface State {
    hh: String
    mm: String
    ss: String
    date: String
}
const initialState = { hh: '00', mm: '00', ss: '00', date: '' }

const reducer = (state: State = initialState, action: ActionClock) => {
    switch (action.type) {
        case ClockTypes.UPDATE_TIME:
            const newTime = action.payload
            //console.log(newTime)

            return newTime
        default:
            return state
    }
}
export default reducer
