import {useRef, useEffect} from 'react';
import './TaskMenu.css';

export default function TaskMenu({setContextMenu, togleTaskPin, deleteTask, task_id, pinned, memo}) {
  
  const wrapper = useRef(null);

  function onClickOutside () {
    setContextMenu({
      toDoId: task_id,
      showContext: false,
      showMemo: false,
    });
  }

  function handleDocumentClick(e) {
    if (wrapper.current && !wrapper.current.contains(e.target)) {
      onClickOutside();
    }
  };

  function addOutsideClickListener() {
    document.addEventListener('click', handleDocumentClick);
  }

  function removeOutsideClickListener() {
    document.removeEventListener('click', handleDocumentClick);
  }

  function onShow () {
    addOutsideClickListener();
  }
  
  function onHide () {
    removeOutsideClickListener();
  }

  useEffect(()=>{
    onShow();
    return () => {
      onHide();
    };
  }, []);

  return (
    <div 
      className="menu"
      ref={wrapper}
    >
      <div 
        className="menu__item" 
        onClick={()=>{
          setContextMenu({
            toDoId: task_id,
            showContext: false,
            showMemo: false,
          });
          onHide();
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
          onHide();
        }}
      >
        <i className="far fa-sticky-note menu__icon"></i>
        <span className="menu__caption">{memo ? "Edit memo" : "Ad a memo"}</span>
      </div>
      <div 
        className="menu__item"
        onClick={()=>{
          setContextMenu({
            toDoId: task_id,
            showContext: false,
            showMemo: false,
          });
          onHide();
          deleteTask(task_id);
        }}
      >
        <i className="far fa-trash-alt menu__icon"></i>
        <span className="menu__caption">Delete</span>
      </div>
    </div>
  )
}
