// src/components/UserProfile.js
import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserProvider';

function UserProfile({ onLeaveGroup, invitations = [] }) {
  const { userList, loggedInUser } = useContext(UserContext);
  const user = userList.find((u) => u.id === loggedInUser);

  if (!user) return <div>Loading user data...</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>User Profile</h2>

      {/* User information */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={`https://ui-avatars.com/api/?name=${user.name}&background=random`}
          alt="Profile"
          style={{ width: '80px', height: '80px', borderRadius: '50%', marginRight: '15px' }}
        />
        <div>
          <h4>{user.name}</h4>
          <button onClick={onLeaveGroup} className="btn btn-danger mt-2">Leave Group</button>
        </div>
      </div>

      {/* Group Invitations */}
      <div style={{ marginTop: '20px' }}>
        <h5>Group Invitations</h5>
        {invitations.length > 0 ? (
          <ul className="list-group">
            {invitations.map((invitation, index) => (
              <li key={index} className="list-group-item">
                Invitation to join group: <strong>{invitation.groupName}</strong>
                <div className="mt-2">
                  <button className="btn btn-primary btn-sm me-2">Accept</button>
                  <button className="btn btn-secondary btn-sm">Decline</button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No new invitations</p>
        )}
      </div>
    </div>
  );
}

export default UserProfile;
