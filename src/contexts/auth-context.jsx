import React, { createContext, useEffect, useState } from 'react';

const initialState = {
  user: new Date(new Date().toLocaleDateString()),
  login: () => {},
  logout: () => {}
}

export const AuthContext = createContext(initialState);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('@organizzei/user')));

  function login(user) {
    const { name, email, imgSrc } = user;

    const stringUser = JSON.stringify({ name, email, imgSrc });
    
    setUser(user);
    localStorage.setItem('@organizzei/user', stringUser);
  }

  function logout() {
    setUser(null);
    localStorage.removeItem('@organizzei/user');
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}> 
      {children} 
    </AuthContext.Provider>
  )
}
