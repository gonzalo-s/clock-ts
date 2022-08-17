import { useEffect, useState } from 'react'
import Clock from './components/Clock'
import GoogleSign from './components/GoogleSign'
import Weather from './components/Weather'
import './styles/app.css'
import CalendarSelector from './components/CalendarSelector'
import { getCalendarData } from './API/getCalendarData'

const App: React.FC = () => {
    const [calendars, setCalendars] = useState<
        gapi.client.calendar.CalendarListEntry[] | null
    >(null)
    const [selectedCalendarId, setSelectedCalendarId] = useState('')

    console.log('calendars in app: ', calendars)
    const setNewCalendars = (
        newCalendars: gapi.client.calendar.CalendarListEntry[]
    ): void => {
        setCalendars(newCalendars)
    }
    const resetCalendars = () => {
        setCalendars(null)
    }

    const selectCalendar = (calendarId: string) => {
        setSelectedCalendarId(calendarId)
    }

    useEffect(() => {
        if (selectedCalendarId.length > 1) getCalendarData(selectedCalendarId)
    }, [selectedCalendarId])

    return (
        <div className="app">
            <div className="app__wrapper">
                <GoogleSign setNewCalendars={setNewCalendars} />
                <CalendarSelector
                    calendars={calendars}
                    selectCalendar={selectCalendar}
                    resetCalendars={resetCalendars}
                />
                <Clock />
                <Weather />
            </div>
        </div>
    )
}

export default App
