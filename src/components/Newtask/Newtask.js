import React from 'react';
import './Newtask.css';

export default function Newtask () {
  return (
    <div className="newtask">
      <input className="newtask__input" type="text" placeholder="Add a task..." />
    </div>
  )
}