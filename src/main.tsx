import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ThemeProvider from './Contexts/ThemeContext/ThemeProvider.tsx'
import Routes from './Router/Routes.tsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Contexts/AutContext/AuthProvider.tsx'
import { Toaster } from 'react-hot-toast'
import Layout from './pages/Layout/Layout.tsx'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Toaster/>
    <ThemeProvider>
      <AuthProvider>
        <Layout/>
        <RouterProvider router={Routes}/>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
