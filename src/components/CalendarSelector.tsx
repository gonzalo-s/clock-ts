import React from 'react'
import { getCalendarData } from '../API/getCalendarData'

type Props = {
    calendars: gapi.client.calendar.CalendarListEntry[] | null
    resetCalendars: () => void
    selectCalendar: (calendarId: string) => void
}

const CalendarSelector = (props: Props): JSX.Element => {
    const { calendars, resetCalendars, selectCalendar } = props

    const handleOnCLick = (calendarId: string) => {
        console.log('calendarId in handleOnClick: ', calendarId)
        //getCalendarData(calendarId)
        selectCalendar(calendarId)
        resetCalendars()
    }
    return (
        <div>
            {calendars ? (
                <ul className="calendar__list__wrapper">
                    {calendars.map((calendar) => {
                        return (
                            <li
                                className="calendar__item__wrapper"
                                key={calendar.etag}
                            >
                                <button
                                    className="calendar__item__btn"
                                    onClick={() => handleOnCLick(calendar.id)}
                                >
                                    {calendar.summary}
                                </button>
                            </li>
                        )
                    })}
                </ul>
            ) : (
                ''
            )}
        </div>
    )
}

export default CalendarSelector
