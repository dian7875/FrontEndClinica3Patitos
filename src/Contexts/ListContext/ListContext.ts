import React from "react";
import { Branch, Type_Appointment } from "../../types/GeneralType";

interface AuthContextType {
    Branches: Branch | null;
    setBranches: (data: Branch | null) => void;
    Types: Type_Appointment | null;
    setTypes: (data: Type_Appointment | null) => void;
    loading: boolean;
    setloading: (_value: boolean) => void;

}

const ListContext = React.createContext<AuthContextType>({
    Branches: null,
    setBranches: (_data: Branch | null) => { },
    Types: null,
    setTypes: (_data: Type_Appointment | null) => { },
    loading: true,
    setloading: (_value: boolean) => {},
});

export default ListContext