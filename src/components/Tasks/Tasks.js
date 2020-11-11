import React from 'react';
import './Tasks.css';

import Task from './../Task/Task';


export default function Tasks ({tasks, togleTaskDone, togleTaskPin, deleteTask}) {
  let pinnedTasksList = tasks
    .filter((el) => el.pinned)
    .map((el) => <Task key={el.id} task={el} togleTaskDone={togleTaskDone} togleTaskPin={togleTaskPin} deleteTask={deleteTask}/>);
  let unPinnedTasksList = tasks
    .filter((el) => !el.pinned)
    .map((el) => <Task key={el.id} task={el} togleTaskDone={togleTaskDone} togleTaskPin={togleTaskPin} deleteTask={deleteTask}/>);
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