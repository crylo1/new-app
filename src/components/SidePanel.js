// src/components/SidePanel.js
import React, { useState, useContext } from 'react';
import { UserContext } from '../contexts/UserProvider';

function SidePanel({ onAddMember, onRemoveMember, onLeaveGroup }) {
  const { userList, loggedInUser } = useContext(UserContext);
  const [newMember, setNewMember] = useState('');
  const user = userList.find((u) => u.id === loggedInUser);

  // Add new member
  const handleAddMember = () => {
    if (newMember.trim()) {
      onAddMember(newMember);
      setNewMember('');
    }
  };

  return (
    <div style={{ width: '250px', backgroundColor: '#f8f9fa', padding: '20px' }}>
      <h4>Group Members</h4>
      <ul className="list-group">
        {userList.map((member) => (
          <li key={member.id} className="list-group-item d-flex justify-content-between align-items-center">
            {member.name}
            {user.id === member.id && (
              <button onClick={() => onRemoveMember(member.id)} className="btn btn-sm btn-danger">Remove</button>
            )}
          </li>
        ))}
      </ul>

      {user && (
        <div style={{ marginTop: '10px' }}>
          <input
            type="text"
            value={newMember}
            onChange={(e) => setNewMember(e.target.value)}
            placeholder="New member name"
            className="form-control"
          />
          <button onClick={handleAddMember} className="btn btn-primary mt-2">Add Member</button>
        </div>
      )}
      {user && (
        <button onClick={onLeaveGroup} className="btn btn-secondary mt-3">Leave Group</button>
      )}
    </div>
  );
}

export default SidePanel;
