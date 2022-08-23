import React from 'react'
import CalendarSelector from './CalendarSelector'
import GoogleSign from './GoogleSign'
import '../styles/calendarView.css'
import { useSelector } from 'react-redux'
import { State } from '../state/reducers/index'
import { SignStatus } from '../state/types/googleTypes'
import CalendarElements from './CalendarElements'

const CalendarView = () => {
    const { signStatus } = useSelector((store: State) => store.googleSignIn)
    const { selectedCalendarElements } = useSelector(
        (store: State) => store.calendars
    )

    console.log(selectedCalendarElements)

    return (
        <div className="calendarView">
            {signStatus === SignStatus.SIGNED_IN ? (
                <CalendarSelector />
            ) : (
                <GoogleSign />
            )}
            <CalendarElements />
        </div>
    )
}

export default CalendarView
