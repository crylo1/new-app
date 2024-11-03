import React, { useState, useContext } from 'react';
import { UserContext } from '../contexts/UserProvider';

function ShoppingList() {
  const { userList, loggedInUser } = useContext(UserContext);
  const user = userList.find((u) => u.id === loggedInUser);

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [filter, setFilter] = useState('all');

  const addItem = () => {
    if (newItem.trim()) {
      const item = { id: Date.now(), name: newItem, completed: false };
      setItems([...items, item]);
      setNewItem('');
    }
  };


  const toggleCompleteItem = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };


  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };


  const filteredItems = items.filter(item => {
    if (filter === 'completed') return item.completed;
    if (filter === 'incomplete') return !item.completed;
    return true;
  });

  return (
    <div className="shopping-list-container" style={{ padding: '20px', flex: 1 }}>
      <h4>Shopping List</h4>

      <div className="add-item-section">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="New item"
          className="form-control mb-2"
        />
        <button onClick={addItem} className="btn btn-primary mb-3">
          Add Item
        </button>
      </div>

      <div className="filter-buttons btn-group mb-3">
        <button
          onClick={() => setFilter('all')}
          className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-outline-primary'}`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('incomplete')}
          className={`btn ${filter === 'incomplete' ? 'btn-primary' : 'btn-outline-primary'}`}
        >
          Incomplete
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={`btn ${filter === 'completed' ? 'btn-primary' : 'btn-outline-primary'}`}
        >
          Completed
        </button>
      </div>

      <ul className="list-group">
        {filteredItems.map((item) => (
          <li
            key={item.id}
            className={`list-group-item d-flex justify-content-between align-items-center ${item.completed ? 'bg-success text-white' : ''}`}
          >
            {item.name}
            <div className="item-buttons">
              <button
                onClick={() => toggleCompleteItem(item.id)}
                className={`btn btn-sm ${item.completed ? 'btn-secondary' : 'btn-success'} me-2`}
              >
                {item.completed ? 'Undo' : 'Complete'}
              </button>
              <button
                onClick={() => deleteItem(item.id)}
                className="btn btn-sm btn-danger"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
