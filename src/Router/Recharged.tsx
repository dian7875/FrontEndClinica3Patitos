import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Recharged = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleBeforeUnload = () => {
            if (window.performance && window.performance.navigation.type === 1) {
                localStorage.setItem('redirectedOnReload', 'true');
            }
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        const redirectedOnReload = localStorage.getItem('redirectedOnReload');
        if (redirectedOnReload) {
            navigate('/');
        }

        localStorage.removeItem('redirectedOnReload');

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [navigate, location]);

    return null;
};

export default Recharged;
