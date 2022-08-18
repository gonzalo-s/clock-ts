import Clock from './components/Clock'
import Weather from './components/Weather'
import CalendarView from './components/CalendarView'
import { StoreProvider } from './StoreContext'
import './styles/app.css'

const App: React.FC = () => {
    // useEffect(() => {
    //     if (selectedCalendarId.length > 1) {
    //         console.log(getCalendarData(selectedCalendarId))
    //         console.log('effect')
    //     }
    // }, [selectedCalendarId])

    return (
        <StoreProvider>
            <div className="app">
                <div className="app__wrapper">
                    <Clock />
                    <CalendarView />
                    <Weather />
                </div>
            </div>
        </StoreProvider>
    )
}

export default App
