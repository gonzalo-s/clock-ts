import React from 'react'
import CalendarSelector from './CalendarSelector'
import GoogleSign from './GoogleSign'
import '../styles/calendarView.css'
type Props = {}

const CalendarView = (props: Props) => {
    return (
        <div className="calendarView">
            <GoogleSign />
            <CalendarSelector />
        </div>
    )
}

export default CalendarView
