import React from 'react';
import './Tasks.css';

import Task from './../Task/Task';


export default function Tasks ({tasks, togleTaskDone, togleTaskPin, deleteTask, contextMenu, setContextMenu}) {

const {toDoId, showContext, showMemo} = contextMenu;

let pinnedTasksList = tasks
  .filter((el) => el.pinned)
  .map((el) => {
    return (
      <Task
        key={el.id}
        task={el}
        togleTaskDone={togleTaskDone}
        togleTaskPin={togleTaskPin}
        deleteTask={deleteTask}
        setContextMenu={setContextMenu}
        showContextMenu={toDoId === el.id ? showContext : false}
        showMemoMenu={toDoId === el.id ? showMemo : false}
      />
    );
  });


  let unPinnedTasksList = tasks
  .filter((el) => !el.pinned)
  .map((el) => {
    return (
      <Task
        key={el.id}
        task={el}
        togleTaskDone={togleTaskDone}
        togleTaskPin={togleTaskPin}
        deleteTask={deleteTask}
        setContextMenu={setContextMenu}
        showContextMenu={toDoId === el.id ? showContext : false}
        showMemoMenu={toDoId === el.id ? showMemo : false}
      />
    );
  });


  return (
    <>
      <div className="tasks tasks--pinned">
        {pinnedTasksList}
      </div>
      <div className="tasks">
        {unPinnedTasksList}
      </div>
    </>
  )
}