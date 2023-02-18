import { StoreProvider } from 'easy-peasy'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import store from './store'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <StoreProvider store={store}>
        <App />
    </StoreProvider>
)
