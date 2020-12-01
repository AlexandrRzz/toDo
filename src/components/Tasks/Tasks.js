import React from 'react';
import './Tasks.css';

import Task from './../Task/Task';


export default function Tasks ({tasks, togleTaskDone, togleTaskPin, deleteTask, contextMenu, setContextMenu, editTaskMemo, showDate}) {

  const {toDoId, showContext, showMemo} = contextMenu;

  let groupTasksList = tasks
  .map((elem) => {
    const date = elem.date;
    const pinnedTasks = [];
    const unPinnedTasks = [];
    let arrToPush = pinnedTasks;

    elem.todos
    .forEach(el => {
      const todo = <Task
        key={el.id}
        task={el}
        togleTaskDone={togleTaskDone}
        togleTaskPin={togleTaskPin}
        deleteTask={deleteTask}
        setContextMenu={setContextMenu}
        showContextMenu={toDoId === el.id ? showContext : false}
        showMemoMenu={toDoId === el.id ? showMemo : false}
        editTaskMemo={editTaskMemo}
      />

      arrToPush = el.pinned ? pinnedTasks : unPinnedTasks;
      arrToPush.push(todo)

    });
    let pinnedTaskElement = null;
    if (pinnedTasks.length > 0) {
      pinnedTaskElement = <div className="tasks tasks--pinned">{pinnedTasks}</div>  
    }
    let dateElement = null;
    if (showDate) {
      dateElement = <p className="tasks__date">{date}</p>
    }

    return (
      <div key={date}>
        {dateElement}
        {pinnedTaskElement}
        <div className="tasks">
          {unPinnedTasks}
        </div>
      </div>
    )
  });

  return (
    <>
      {groupTasksList}
    </>
  )
}