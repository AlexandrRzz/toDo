import TaskMenu from './../TaskMenu/TaskMenu';
import TaskMemo from './../TaskMemo/TaskMemo';


export default function Task ({task,  togleTaskDone, togleTaskPin, deleteTask, showContextMenu, showMemoMenu, setContextMenu, editTaskMemo}) {
  const {id, done, pinned, text, memo} = task;
  let taskClassName = 'task';
  if (pinned) {
    taskClassName += ' task--pinned';
  }

  let menu;
  if (showContextMenu) {
    menu = (
      <TaskMenu
        setContextMenu={setContextMenu}
        togleTaskPin={togleTaskPin}
        deleteTask={deleteTask}
        task_id={id}
        pinned={pinned}
        memo={memo}
      />
    );
  }
  let memoForm;
  if (showMemoMenu) {
    memoForm = (
      <TaskMemo 
        task_id={id} 
        setContextMenu={setContextMenu}
        editTaskMemo={editTaskMemo}
        memo={memo}
      />
    );
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
          onClick={() => {
            setContextMenu({
              toDoId: id,
              showContext: !showContextMenu,
              showMemo: false,
            });
          }}
        ></i>
      </div>
      <p className="task__memo">{!showMemoMenu && memo}</p>
      {menu}
      {memoForm}
      
    </div>
  )
}
