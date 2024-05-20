import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ThemeProvider from './assets/ThemeContext/ThemeProvider.tsx'
import GeneralProvider from './assets/GeneralContext/GeneralProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
    <GeneralProvider>
    <App/>
    </GeneralProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
