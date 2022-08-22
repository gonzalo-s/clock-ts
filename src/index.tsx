import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { StoreProvider } from './StoreContext'
import { Provider } from 'react-redux'
import { store } from './state'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <StoreProvider>
                <App />
            </StoreProvider>
        </Provider>
    </React.StrictMode>
)
