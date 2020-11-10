import React from 'react';

export default function Task ({task,  togleTaskDone}) {
  const {id, done, pinned, text, memo} = task;
  let taskClassName = 'task';
  if (pinned) {
    taskClassName += ' task--pinned';
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
        <i className="fas fa-ellipsis-h task__menu"></i>
      </div>
      <p className="task__memo">{memo}</p>
    </div>
  )
}
