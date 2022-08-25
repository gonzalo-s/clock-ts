import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { State } from '../state/reducers'
import '../styles/calendarElements.css'
import { CalendarElement } from '../state/types/calendarTypes'
const CalendarElements = (): JSX.Element => {
    // event states: COMPLETED | IN_PROGRESS | PENDING
    const { selectedCalendarElements } = useSelector(
        (store: State) => store.calendars
    )
    const { nowFullTimeString } = useSelector((store: State) => store.clock)

    enum EventStates {
        COMPLETED = 'completed',
        IN_PROGRESS = 'inProgress',
        PENDING = 'pending',
    }

    interface CalendarEvent extends CalendarElement {
        state?: EventStates
    }

    type CalendarEvents = CalendarEvent[]

    const [calendarEvents, setCalendarEvents] = useState<CalendarEvent[]>([])
    console.log('calendarEvents: ', calendarEvents)
    useEffect(() => {
        if (selectedCalendarElements === null) return
        const checkTimeAddState = (calEvents: CalendarEvents): void => {
            // forEach event check event start and end time VS ACTUAL Time and add State
            // update calendarEvents state
            const newCalEventsWState = calEvents.map((event) => {
                const eventFullTimeStart =
                    event.start.splitTime.elementFullTimeString
                const eventFullTimeEnd =
                    event.end.splitTime.elementFullTimeString

                if (nowFullTimeString < eventFullTimeStart)
                    return { ...event, state: EventStates.PENDING }
                if (nowFullTimeString > eventFullTimeEnd)
                    return { ...event, state: EventStates.COMPLETED }

                return { ...event, state: EventStates.IN_PROGRESS }
            })
            console.log('new execution')
            setCalendarEvents(newCalEventsWState)
        }
        checkTimeAddState(selectedCalendarElements)
    }, [
        EventStates.COMPLETED,
        EventStates.IN_PROGRESS,
        EventStates.PENDING,
        nowFullTimeString,
        selectedCalendarElements,
    ])

    if (selectedCalendarElements === null) return <></>
    return (
        <ul className="calendarElements">
            {calendarEvents.map((element) => {
                const startTime = `${element.start.splitTime.splitHours}:${element.start.splitTime.splitMinutes}`
                const startDate = `${element.start.splitTime.splitMonth}-${element.start.splitTime.splitDate}`
                return (
                    <li key={element.id} className="ElementCardWrapper">
                        <div className="ElementCard">
                            <div className="ElementCard__Summary">
                                {element.summary}
                            </div>
                            <div>{element.state}</div>
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
