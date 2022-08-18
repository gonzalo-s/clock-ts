import React from 'react'
import { getCalendarData } from '../API/getCalendarData'
import { useStoreContext } from '../StoreContext'

const CalendarSelector = (): JSX.Element => {
    const { calendars, selectCalendar, resetCalendars } = useStoreContext()
    console.log(calendars)
    const handleOnCLick = (calendarId: string) => {
        console.log('calendarId in handleOnClick: ', calendarId)
        getCalendarData(calendarId)
        selectCalendar(calendarId)
        resetCalendars()
    }
    return (
        <div>
            {calendars !== null ? (
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
