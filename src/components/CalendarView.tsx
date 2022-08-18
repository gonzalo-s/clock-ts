import React from 'react'
import CalendarSelector from './CalendarSelector'
import GoogleSign from './GoogleSign'
import '../styles/calendarView.css'
import { useStoreContext } from '../StoreContext'

const CalendarView = () => {
    const { isSignedIn, calendarData } = useStoreContext()
    console.log(calendarData)
    return (
        <div className="calendarView">
            {isSignedIn ? <CalendarSelector /> : <GoogleSign />}
            {!!calendarData ? <div>{calendarData[0]?.summary}</div> : ''}
        </div>
    )
}

export default CalendarView
