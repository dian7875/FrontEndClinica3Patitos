import { ReactNode, useState} from 'react';
import GeneralContext from './GerneralContext';



const GeneralProvider = ({children}: {children: ReactNode}) => {
    const [ test, ] = useState('');
  return (
    <GeneralContext.Provider value={{ test }}>
      {children}
    </GeneralContext.Provider>
  );
}

export default GeneralProvider;