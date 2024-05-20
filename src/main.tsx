import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ThemeProvider from './Contexts/ThemeContext/ThemeProvider.tsx'
import GeneralProvider from './Contexts/GeneralContext/GeneralProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
    <GeneralProvider>
    <App/>
    </GeneralProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
