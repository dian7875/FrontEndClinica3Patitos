import React from "react";
import { Branch, Type_Appointment } from "../../types/GeneralType";

interface AuthContextType {
    Branches: Branch | null;
    setBranches: (data: Branch | null) => void;
    Types: Type_Appointment | null;
    setTypes: (data: Type_Appointment | null) => void;

}

const ListContext = React.createContext<AuthContextType>({
    Branches: null,
    setBranches: (_data: Branch | null) => { },
    Types: null,
    setTypes: (_data: Type_Appointment | null) => { }
});

export default ListContext