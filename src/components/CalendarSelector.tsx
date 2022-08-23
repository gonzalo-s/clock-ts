import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '../state/reducers'
import '../styles/calendarView.css'
import * as calendarElementsAction from '../state/action-creators/calendarElementsAction'

const CalendarSelector = (): JSX.Element => {
    const { calendars } = useSelector((store: State) => store.calendars)

    const dispatch = useDispatch()
    const { getDataFirstAndResetCalendars } = bindActionCreators(
        calendarElementsAction,
        dispatch
    )

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
