// src/App.tsx

import AppointmentsProvider from "./Contexts/AppoimentContext/AppoimentProvider";
import AuthProvider from "./Contexts/AutContext/AuthProvider";
import ThemeProvider from "./Contexts/ThemeContext/ThemeProvider";
import Router from "./Router/Routes";
import Footer from "./components/Layout/Footer";


const App: React.FC = () => {
    return (
        <>
            <AuthProvider>
                <AppointmentsProvider>
                    <ThemeProvider>
                        <Router />
                        <Footer />
                    </ThemeProvider>
                </AppointmentsProvider>
            </AuthProvider>
        </>
    );
};

export default App;
