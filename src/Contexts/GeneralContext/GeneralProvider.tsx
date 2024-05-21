import { ReactNode, useState} from 'react';
import GeneralContext from './GerneralContext';

const GeneralProvider = ({children}: {children: ReactNode}) => {
    const [ rol, setRol] = useState('');
    const [isLogged,setIsLogged]=useState(false)
  return (
    <GeneralContext.Provider value={{ rol, setRol, isLogged, setIsLogged }}>
      {children}
    </GeneralContext.Provider>
  );
}

export default GeneralProvider;