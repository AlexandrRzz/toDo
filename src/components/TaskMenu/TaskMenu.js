import React from 'react';
import './TaskMenu.css';

export default function TaskMenu({setContextMenu, togleTaskPin, deleteTask, task_id, pinned}) {
  //console.log(props);
  return (
    <div className="menu">
      <div 
        className="menu__item" 
        onClick={()=>{
          setContextMenu({
            toDoId: task_id,
            showContext: false,
            showMemo: false,
          });
          togleTaskPin(task_id);
        }}
      >
        <i className="fas fa-thumbtack menu__icon"></i>
        <span className="menu__caption">{pinned ? "Unpin from top" : "Pin on the top"}</span>
      </div>
      <div 
        className="menu__item"
        onClick={()=>{
          setContextMenu({
            toDoId: task_id,
            showContext: false,
            showMemo: true,
          });
        }}
      >
        <i className="far fa-sticky-note menu__icon"></i>
        <span className="menu__caption">Ad a memo</span>
      </div>
      <div 
        className="menu__item"
        onClick={()=>{
          setContextMenu({
            toDoId: task_id,
            showContext: false,
            showMemo: false,
          });
          deleteTask(task_id);
        }}
      >
        <i className="far fa-trash-alt menu__icon"></i>
        <span className="menu__caption">Delete</span>
      </div>
    </div>
  )
}
