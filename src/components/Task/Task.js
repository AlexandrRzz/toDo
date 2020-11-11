import React, { useState } from 'react';
import TaskMenu from './../TaskMenu/TaskMenu'


export default function Task ({task,  togleTaskDone, togleTaskPin, deleteTask}) {
  const {id, done, pinned, text, memo} = task;
  let taskClassName = 'task';
  if (pinned) {
    taskClassName += ' task--pinned';
  }

  const [taskMenu, setTaskMenu] = useState({show: false});
  let menu;
  if (taskMenu.show) {
    menu = <TaskMenu setTaskMenu={setTaskMenu} togleTaskPin={togleTaskPin} deleteTask={deleteTask} task_id={id} pinned={pinned}/>;
  }

  return (
    <div className={taskClassName}>
      <div className="task__inner">
        <input 
          type="checkbox" 
          className="custom-checkbox" 
          id={id} 
          name="taskstatus" 
          value="yes"
          defaultChecked ={done}
          onChange={()=> togleTaskDone(id)}
        />
        <label className="task__desription" htmlFor={id}>
            {text}
        </label>
        <i 
          className="fas fa-ellipsis-h task__menu"
          onClick={()=>{setTaskMenu({show: true})}}
        ></i>
      </div>
      <p className="task__memo">{memo}</p>
      {menu}
      
    </div>
  )
}
