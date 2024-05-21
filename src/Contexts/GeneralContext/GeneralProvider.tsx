import { ReactNode, useState} from 'react';
import GeneralContext from './GerneralContext';

const GeneralProvider = ({children}: {children: ReactNode}) => {
    const [ rol, setRol] = useState('');
  return (
    <GeneralContext.Provider value={{ rol, setRol }}>
      {children}
    </GeneralContext.Provider>
  );
}

export default GeneralProvider;