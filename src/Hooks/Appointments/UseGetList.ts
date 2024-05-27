import { useEffect, useState } from "react";
import { Branch, Type_Appointment } from "../../types/GeneralType";
import { getListBranch, getListType } from "../../Services/ServiceGeneral";


const UseGetList = () => {
  
    const [Branches, setBranches] = useState<Branch[]>([]);
    const [TypesAp, setTypesAp] = useState<Type_Appointment[]>([]);
    const getListBranches = async () => {
      try {
        const BranchesList = await getListBranch();
        setBranches(BranchesList);
      } catch (error) {
        console.error("Error al cargar datos:", Error);
      }
    };
    const getListTypes = async()=> {
        try {
            const typesList = await getListType();
            setTypesAp(typesList);
        } catch (error) {
            console.error('Las Listas no cargaron bien')
        }
    }
  
    useEffect(() => {
      getListBranches();
      getListTypes();
    }, []);
  
    return {
     Branches, TypesAp
    };
}

export default UseGetList
