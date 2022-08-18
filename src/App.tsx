import Clock from './components/Clock'
import Weather from './components/Weather'
import CalendarView from './components/CalendarView'
import './styles/app.css'

const App: React.FC = () => {
    return (
        <div className="app">
            <div className="app__wrapper">
                <Clock />
                <CalendarView />
                <Weather />
            </div>
        </div>
    )
}

export default App
