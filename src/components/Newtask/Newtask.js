import React from 'react';
import './Newtask.css';

export default function Newtask ({enterNewTask}) {
  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      enterNewTask(e.target.value);
      e.target.value = '';
    }
  }
  return (
    <div className="newtask">
      <input 
        className="newtask__input" 
        type="text" 
        placeholder="Add a task..." 
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}