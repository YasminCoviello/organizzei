import React, { createContext, useContext, useEffect, useState } from 'react';

const initialState = {
  date: new Date(new Date().toLocaleDateString()),
  setDate: () => {}
}

export const DateContext = createContext(initialState);

export const DateProvider = ({ children }) => {
  const [date, setDate] = useState(new Date(new Date().toLocaleDateString()));

  useEffect(() => {
    console.log(date);
  }, [date]);

  return (
    <DateContext.Provider value={{ date, setDate }}> 
      {children} 
    </DateContext.Provider>
  )
}
