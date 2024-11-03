// src/components/Header.js
import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserProvider';

function Header() {
  const { userList, loggedInUser } = useContext(UserContext);
  const user = userList.find((u) => u.id === loggedInUser);

  return (
    <div>
      <h1>Shopping List App</h1>
      {user ? <p>Welcome, {user.name}</p> : <p>Loading...</p>}
    </div>
  );
}

export default Header;
