import { jwtDecode } from "jwt-decode";
import { useCallback, useContext, useEffect, useState } from "react";
import User from "../types/User";
import GeneralContext from "../Contexts/GeneralContext/GerneralContext";

const useGetUserData = () => {
    const [user, setUser] = useState<User | null>(null);
    const {setRol} = useContext(GeneralContext)
    const decodeToken = useCallback(() => {
        try {
            const token = localStorage.getItem('authToken');

            if (token === null) {
                throw new Error('No token found in localStorage');
            }

            const decoded: User = jwtDecode(token);
            setUser(decoded);
            setRol(decoded.rol);
            console.log(decoded.rol);
        } catch (error) {
            console.log('Error JWT Inválido o no encontrado:', error);
        }
    }, []);

    useEffect(() => {
        decodeToken();
    }, [decodeToken]);

    return { user };
}

export default useGetUserData
