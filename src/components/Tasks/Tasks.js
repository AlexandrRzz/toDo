import React from 'react';
import './Tasks.css';

import Task from './../Task/Task';


export default function Tasks ({tasks}) {
  let pinnedTasksList = tasks
    .filter((el) => el.pinned)
    .map((el) => <Task task={el} />);
  let unPinnedTasksList = tasks
    .filter((el) => !el.pinned)
    .map((el) => <Task task={el} />);
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