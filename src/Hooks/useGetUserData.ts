import { jwtDecode } from "jwt-decode";
import { useCallback, useContext, useEffect, useState } from "react";
import User from "../types/User";
import GeneralContext from "../Contexts/GeneralContext/GerneralContext";

const simulatedToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2wiOiJBZG1pbiIsIm5vbWJyZSI6Ilplcm8iLCJ0ZWxlZm9ubyI6IisxMjM0NTY3ODkiLCJlbWFpbCI6Ilplcm9AZXhhbXBsZS5jb20ifQ.qkpBLU8BHzxrBC6CrDmn8XatFl8Iu5t-8h3GxCZndNk'

const useGetUserData = () => {
    const [user, setUser] = useState<User | null>(null);
    const {setRol} = useContext(GeneralContext)
    const decodeToken = useCallback(() => {
        try {
            const decoded: User = jwtDecode(simulatedToken);
            setUser(decoded);
            setRol(decoded.rol)
            console.log(decoded.rol)
        } catch (error) {
            console.log('Error JWT Inválido:', error);
        }
    }, []);

    useEffect(() => {
        decodeToken();
    }, [decodeToken]);

    return { user };
}

export default useGetUserData
