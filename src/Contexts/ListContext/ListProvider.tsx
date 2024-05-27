import { ReactNode, useState } from 'react';
import ListContext from './ListContext';
import { Branch, Type_Appointment } from '../../types/GeneralType';



const ListProvider = ({ children }: { children: ReactNode }) => {
    const [Branches, setBranches] = useState<Branch | null>(null);
    const [Types, setTypes] = useState<Type_Appointment | null>(null);
  return (
    <ListContext.Provider value={{Branches, setBranches, Types, setTypes}}>
      {children}
    </ListContext.Provider>
  );
}
export default ListProvider;