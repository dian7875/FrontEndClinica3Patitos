import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ThemeProvider from './Contexts/ThemeContext/ThemeProvider.tsx'
import AuthProvider from './Contexts/AutContext/AuthProvider.tsx'
import { Toaster } from 'react-hot-toast'
import Footer from './Layout/Footer.tsx'
import Rout from './Router/Routes.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Toaster />
    <ThemeProvider>
      <AuthProvider>
          <Rout/>
          <Footer/>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
