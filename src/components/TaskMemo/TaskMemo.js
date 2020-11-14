import React from 'react';
import './TaskMemo.css';

export default function TaskMemo({ setContextMenu, task_id }) {
  return (
    <div className="memo">
      <input 
        className="memo__input" 
        type="text" 
        placeholder="Add memo for task..." 
      />
      <button className="memo__button" >
        <i class="fas fa-check"></i>
      </button>
      <button className="memo__button" >
        <i 
          class="fas fa-times"
          onClick={()=>{
            setContextMenu({
              toDoId: task_id,
              showContext: false,
              showMemo: false,
            });
          }}
        ></i>
      </button>
    </div>
  )
}
