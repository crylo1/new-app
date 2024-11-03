// src/App.js
import React, { useState } from 'react';
import UserProvider from './contexts/UserProvider';
import Header from './components/Header';
import SidePanel from './components/SidePanel';
import ShoppingList from './components/ShoppingList';
import UserProfile from './components/UserProfile';

function App() {
  const [invitations] = useState([{ groupName: 'New Group Invitation' }]);

  // Function to handle leaving the group
  const leaveGroup = () => {
    console.log('User left the group');
    // Logic for leaving the group
  };

  return (
    <UserProvider>
      <div>
        <Header />
        <div style={{ display: 'flex' }}>
          <SidePanel />
          <ShoppingList />
          <UserProfile onLeaveGroup={leaveGroup} invitations={invitations} />
        </div>
      </div>
    </UserProvider>
  );
}

export default App;
