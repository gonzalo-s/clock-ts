import { Dispatch } from 'react'
import { gapi } from 'gapi-script'
import { CalendarElementsDispatch, CalendarTypes } from '../types/calendarTypes'

interface DateRange {
    today: string
    plusTen: string
}

const formatDateRange = (): DateRange => {
    const today = new Date()
    const plusTen = new Date()
    plusTen.setDate(today.getDate() + 10)
    return {
        today: today.toISOString(),
        plusTen: plusTen.toISOString(),
    }
}

const setNewCalendarData = (calendarElements: gapi.client.calendar.Event[]) => {
    return {
        type: CalendarTypes.SELECTED_CALENDAR_ELEMENTS,
        payload: calendarElements,
    }
}

const getCalendarData = async (calendarId: string) => {
    const { today, plusTen } = formatDateRange()

    try {
        const data = await gapi.client.calendar.events.list({
            calendarId: calendarId,
            timeMin: today,
            timeMax: plusTen,
            singleEvents: true,
            orderBy: 'startTime',
        })
        return data.result.items
    } catch (err) {
        console.error('getCalendarData error__:_', err)
    }
}

export const getDataFirstAndResetCalendars = (calendarId: string) => {
    return async (dispatch: Dispatch<CalendarElementsDispatch>) => {
        const newData = await getCalendarData(calendarId)

        if (newData) {
            dispatch(setNewCalendarData(newData))
        }
    }
}
