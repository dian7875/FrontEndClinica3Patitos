import ReactDOM from 'react-dom/client'
import './index.css'
import { Toaster } from 'react-hot-toast'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PrimeReactProvider } from "primereact/api";
import LoadingProvider from './Contexts/LoadingContext/LoadingProvider.tsx'
import App from './App.tsx'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <LoadingProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <PrimeReactProvider value={{ unstyled: true }}>
          <Toaster />
          <App>
          </App>
        </PrimeReactProvider>
      </LocalizationProvider>
    </LoadingProvider>
  </>
)

