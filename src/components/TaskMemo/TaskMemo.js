import React, { useState } from 'react';
import './TaskMemo.css';

export default function TaskMemo({ setContextMenu, task_id, editTaskMemo, memo }) {
  const [taskMemo, setTaskMemo] = useState(memo);
  const onChangeMemo = (e) => {
    setTaskMemo(e.target.value)
  }; 
  return (
    <div className="memo">
      <input 
        className="memo__input" 
        type="text" 
        placeholder="Add memo for task..." 
        onChange ={onChangeMemo} 
        value = {taskMemo}
      />
      <button className="memo__button" >
        <i 
          className="fas fa-check"
          onClick={()=>{
            editTaskMemo(task_id, taskMemo);
            setContextMenu({
              toDoId: task_id,
              showContext: false,
              showMemo: false,
            });
          }}         
        ></i>
      </button>
      <button className="memo__button" >
        <i 
          className="fas fa-times"
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
