import { jwtDecode } from "jwt-decode";
import { useCallback, useEffect, useState } from "react";
import User from "../types/User";

const useGetUserData = () => {
    const [user, setUser] = useState<User | null>(null);
    const decodeToken = useCallback(() => {
        try {
            const token = localStorage.getItem('authToken');

            if (token === null) {
                throw new Error('No token found in localStorage');
            }
            const decoded: User = jwtDecode(token);
            setUser(decoded);
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
