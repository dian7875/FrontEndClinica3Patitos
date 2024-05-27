import ReactDOM from 'react-dom/client'
import './index.css'
import ThemeProvider from './Contexts/ThemeContext/ThemeProvider.tsx'
import AuthProvider from './Contexts/AutContext/AuthProvider.tsx'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Layout/Footer.tsx'
import Router from './Router/Routes.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <Toaster />
    <ThemeProvider>
      <AuthProvider>
          <Router/>
          <Footer/>
      </AuthProvider>
    </ThemeProvider>
  </>,
)
