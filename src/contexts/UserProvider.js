// src/contexts/UserProvider.js
import React, { createContext, useState } from 'react';

// Создаем контекст UserContext
export const UserContext = createContext();

function UserProvider({ children }) {
  const [loggedInUser, setLoggedInUser] = useState('u1'); // Идентификатор текущего пользователя
  const [userList] = useState([
    { id: 'u1', name: 'User1' },
    { id: 'u2', name: 'User2' },
    { id: 'u3', name: 'User3' },
  ]);

  const value = {
    userList,        // Список всех пользователей
    loggedInUser,    // Текущий пользователь
    setLoggedInUser, // Функция для смены текущего пользователя
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserProvider;
