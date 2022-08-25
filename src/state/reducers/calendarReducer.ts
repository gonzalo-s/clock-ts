import {
    ActionCalendar,
    CalendarsList,
    CalendarTypes,
    CalendarElementsType,
    SplittedTime,
    CalendarElement,
} from '../types/calendarTypes'

interface State {
    calendars: CalendarsList | null
    selectedCalendarElements: CalendarElementsType | null
}
const calendarElementsFormatter = (isoStringDate: string): SplittedTime => {
    // adds start and end time splitTime OBJECT with YYYY MM DD hh mm ss --- split string
    // input example 2022-08-29T17:00:00-03:00
    console.log('isoStringDate: ', isoStringDate)
    const splitYear = isoStringDate.split('T')[0].split('-')[0]
    const splitMonth = isoStringDate.split('T')[0].split('-')[1]
    const splitDate = isoStringDate.split('T')[0].split('-')[2]
    const splitHours = isoStringDate.split('T')[1].slice(0, 8).split(':')[0]
    const splitMinutes = isoStringDate.split('T')[1].slice(0, 8).split(':')[1]
    const splitSeconds = isoStringDate.split('T')[1].slice(0, 8).split(':')[2]
    const regex = /[-T:]/g
    const elementFullTimeString = isoStringDate.replace(regex, '').slice(0, 14)
    return {
        splitYear,
        splitMonth,
        splitDate,
        splitHours,
        splitMinutes,
        splitSeconds,
        elementFullTimeString,
    }
}

const reducer = (
    state: State = { calendars: null, selectedCalendarElements: null },
    action: ActionCalendar
): State => {
    switch (action.type) {
        case CalendarTypes.UPDATE_CALENDARS:
            //console.log('action.payload: ', action.payload)
            return { ...state, calendars: action.payload }
        case CalendarTypes.SELECTED_CALENDAR_ELEMENTS:
            console.log('SELECTED_CALENDAR_ELEMENTS: ', action.payload)

            const calendarElements = action.payload

            calendarElements.forEach((element: CalendarElement) => {
                console.log(
                    'element.start.dateTime: ',
                    element.start.dateTime,
                    '__',
                    element.end.date
                )

                const start =
                    element.start.dateTime || element.start.date + 'T00:00:00'
                const end =
                    element.end.dateTime || element.end.date + 'T23:55:59'

                console.log(element.summary, 'start: ', start)
                console.log(element.summary, 'end: ', end)
                element.start.splitTime = calendarElementsFormatter(start)
                element.end.splitTime = calendarElementsFormatter(end)
            })

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
