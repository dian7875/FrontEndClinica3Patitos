import { useState, useCallback } from "react";
import { Branch, Type_Appointment } from "../../types/GeneralType";
import { getListBranch, getListType } from "../../services/ServiceGeneral";

const UseGetList = () => {
    const [Branches, setBranches] = useState<Branch[]>([]);
    const [TypesAp, setTypesAp] = useState<Type_Appointment[]>([]);

    const getListBranches = useCallback(async () => {
        try {
            const BranchesList = await getListBranch();
            setBranches(BranchesList);
        } catch (error) {
            console.error("Error al cargar datos:", error);
        }
    }, []);

    const getListTypes = useCallback(async () => {
        try {
            const typesList = await getListType();
            setTypesAp(typesList);
        } catch (error) {
            console.error('Las Listas no cargaron bien');
        }
        
    }, []);
    return {
       getListBranches, getListTypes, TypesAp, Branches
    };
}

export default UseGetList;