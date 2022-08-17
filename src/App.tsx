import Clock from './components/Clock'
import GoogleSign from './components/GoogleSign'
import Weather from './components/Weather'
import './styles/app.css'

function App() {
    return (
        <div className="app">
            <div className="app__wrapper">
                <GoogleSign />
                <Clock />
                <Weather />
            </div>
        </div>
    )
}

export default App
