import { ClockTypes, ActionClock, NewTime } from '../types/clockTypes'

interface State extends NewTime {}

const initialState = {
    nowHh: '00',
    nowMm: '00',
    nowSs: '00',
    nowYear: '00',
    nowMonth: '00',
    nowDate: '00',
    nowFullTimeString: '000000000000',
}
const numToStrFormatter = (string: string): string => {
    return parseInt(string, 10) <= 9 ? `0${string}` : string
}

const reducer = (state: State = initialState, action: ActionClock): State => {
    switch (action.type) {
        case ClockTypes.UPDATE_TIME:
            const isoStringDate = action.payload
            const nowYear = isoStringDate.split('T')[0].split('-')[0]
            const nowMonth = isoStringDate.split('T')[0].split('-')[1]
            const nowDate = isoStringDate.split('T')[0].split('-')[2]
            const nowHh = numToStrFormatter(
                isoStringDate.split('T')[1].slice(0, 8).split(':')[0]
            )
            const nowMm = numToStrFormatter(
                isoStringDate.split('T')[1].slice(0, 8).split(':')[1]
            )
            const nowSs = numToStrFormatter(
                isoStringDate.split('T')[1].slice(0, 8).split(':')[2]
            )
            const nowFullTimeString =
                nowYear + nowMonth + nowDate + nowHh + nowMm + nowSs
            console.log(isoStringDate)
            return {
                nowYear,
                nowMonth,
                nowDate,
                nowHh,
                nowMm,
                nowSs,
                nowFullTimeString,
            }
        default:
            return state
    }
}
export default reducer
