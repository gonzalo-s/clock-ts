import { CalendarElements } from '../types/calendarTypes'
import {
    ActionCalendar,
    CalendarsList,
    CalendarTypes,
} from '../types/calendarTypes'

interface State {
    calendars: CalendarsList | null
    selectedCalendarElements: CalendarElements | null
}

const reducer = (
    state: State = { calendars: null, selectedCalendarElements: null },
    action: ActionCalendar
): State => {
    switch (action.type) {
        case CalendarTypes.UPDATE_CALENDARS:
            console.log('action.payload: ', action.payload)
            return { ...state, calendars: action.payload }
        case CalendarTypes.SELECTED_CALENDAR_ELEMENTS:
            return {
                ...state,
                calendars: null,
                selectedCalendarElements: action.payload,
            }
        default:
            return state
    }
}

export default reducer
