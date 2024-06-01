import ReactDOM from 'react-dom/client'
import './index.css'
import ThemeProvider from './Contexts/ThemeContext/ThemeProvider.tsx'
import AuthProvider from './Contexts/AutContext/AuthProvider.tsx'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Layout/Footer.tsx'
import Router from './Router/Routes.tsx'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PrimeReactProvider } from "primereact/api";
import LoadingProvider from './Contexts/LoadingContext/LoadingProvider.tsx'
import AppointmentsProvider from './Contexts/AppoimentContext/AppoimentProvider.tsx'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
  <LoadingProvider>
  <LocalizationProvider dateAdapter={AdapterDayjs}> 
  <PrimeReactProvider value={{ unstyled: true }}>
    <Toaster/>
    <ThemeProvider>
      <AuthProvider>
        <AppointmentsProvider>
          <Router/>
          <Footer/>
        </AppointmentsProvider>
      </AuthProvider>
    </ThemeProvider>
    </PrimeReactProvider>
    </LocalizationProvider>
  </LoadingProvider>
  </>
)

