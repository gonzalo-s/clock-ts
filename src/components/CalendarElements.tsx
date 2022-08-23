import React from 'react'
import { useSelector } from 'react-redux'
import { State } from '../state/reducers'
import '../styles/calendarElements.css'
const CalendarElements = (): JSX.Element => {
    const { selectedCalendarElements } = useSelector(
        (store: State) => store.calendars
    )
    if (selectedCalendarElements === null) return <></>

    return (
        <ul className="calendarElements">
            {selectedCalendarElements.map((element) => {
                const startDateTime = element.start.dateTime
                const startTime = startDateTime.slice(
                    startDateTime.search('T') + 1,
                    startDateTime.search('T') + 6
                )
                const startDate = startDateTime.split('T')[0]
                return (
                    <li key={element.id} className="ElementCardWrapper">
                        <div className="ElementCard">
                            <div className="ElementCard__Summary">
                                {element.summary}
                            </div>
                            <div className="ElementCard__Date">{startTime}</div>
                            <div className="ElementCard__StartTime">
                                {startDate}
                            </div>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

export default CalendarElements
