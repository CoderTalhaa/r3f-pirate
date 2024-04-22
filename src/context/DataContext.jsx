// DataContext.js
import  { createContext,  useState } from 'react';
import {data} from "../index"




export const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [activeData, setActiveData] = useState(data[2]);
  const [condition, setCondition] = useState(false);

  const handleSwap = (item) => {
    if(activeData.id !== item.id) setActiveData(item);
  }

  return (
    <DataContext.Provider value={{activeData, setActiveData, handleSwap, data, condition, setCondition}} >
      {children}
    </DataContext.Provider>
  );
};

