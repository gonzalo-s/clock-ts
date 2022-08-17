import { useState } from 'react'
import Clock from './components/Clock'
import GoogleSign from './components/GoogleSign'
import Weather from './components/Weather'
import './styles/app.css'

const App: React.FC = () => {
    const [calendars, setCalendars] = useState<
        gapi.client.calendar.CalendarListEntry[] | null | undefined
    >(null)

    console.log('calendars in app: ', calendars)
    const setNewCalendars = (
        newCalendars: gapi.client.calendar.CalendarListEntry[]
    ): void => {
        setCalendars(newCalendars)
    }

    return (
        <div className="app">
            <div className="app__wrapper">
                <GoogleSign setNewCalendars={setNewCalendars} />
                <Clock />
                <Weather />
            </div>
        </div>
    )
}

export default App
