import React from 'react';
import './Tasks.css';

import Task from './../Task/Task';


export default function Tasks ({tasks, togleTaskDone}) {
  let pinnedTasksList = tasks
    .filter((el) => el.pinned)
    .map((el) => <Task key={el.id} task={el} togleTaskDone={togleTaskDone}/>);
  let unPinnedTasksList = tasks
    .filter((el) => !el.pinned)
    .map((el) => <Task key={el.id} task={el} togleTaskDone={togleTaskDone} />);
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