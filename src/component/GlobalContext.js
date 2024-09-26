// GlobalContext.js
import React, { createContext, useState } from 'react';


 const GlobalStateContext = createContext();
 const GlobalStateProvider = ({ children }) => {
  const [name, setName] = useState('varnit');

  return (
    <GlobalStateContext.Provider value={{ name, setName }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
export {GlobalStateContext ,GlobalStateProvider}