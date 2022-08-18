import React from 'react'
import { getCalendarData } from '../API/getCalendarData'
import { useStoreContext } from '../StoreContext'
import '../styles/calendarView.css'

const CalendarSelector = (): JSX.Element => {
    const { calendars, resetCalendars, setNewCalendarData } = useStoreContext()

    const getDataFirstAndResetCalendars = async (calendarId: string) => {
        const newData = await getCalendarData(calendarId)
        if (newData) {
            console.log('got newCalendarData')
            setNewCalendarData(newData)
            resetCalendars()
        }
    }
    const handleOnCLick = (calendarId: string) => {
        getDataFirstAndResetCalendars(calendarId)
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
