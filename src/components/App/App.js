import React, { useState, useEffect } from 'react';
import './App.css';

import Nav from '../Nav/Nav';
import Period from '../Period/Period';
import Newtask from '../Newtask/Newtask';
import Tasks from '../Tasks/Tasks';

import {addDays,getWeekStart, getWeekEnd, getMonthStart, getMonthEnd, getYearStart, getYearEnd} from '../../helpers/helpers.date';

import { v4 as uuid } from 'uuid';


const LOCAL_STORAGE_KEY_TODO = 'todoApp.todoData';

function App() {
  const navItems = [
    { 
      id : 1,
      name : 'Day',
    },
    { 
      id : 2,
      name : 'Week',
    },
    { 
      id : 3,
      name : 'Month',
    },
    { 
      id : 4,
      name : 'Year',
    }
  ];

  const [toDoData, setToDoData] = useState({fixNavItem: 1,
    fixInterval: { dateStart: new Date(), dateEnd: new Date() }, toDoTasks: [] });

  const [contextMenu, setContextMenu] = useState({
    toDoId: "b2a90b85-20e1-4097-a867-7b2692afeb2a",
    showContext: false,
    showMemo: false,
  })

  useEffect(() => {
    const storedToDoData = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY_TODO),
      function (key, value) {
        if (key === "dateStart" || key === "dateEnd") return new Date(value);
        return value;
      }
    ) || {
      fixNavItem: 1,
      fixInterval: { dateStart: new Date(), dateEnd: new Date(),},
      toDoTasks: [],
    };
    setToDoData(storedToDoData);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_TODO, JSON.stringify(toDoData))
  }, [toDoData])

  function toggleNav(id) {
    let dateStart = new Date();
    let dateEnd = new Date();
    switch (id) {
      case 2:
        dateStart = getWeekStart(dateStart);
        dateEnd = getWeekEnd(dateEnd);
        break;
      case 3:
        dateStart = getMonthStart(dateStart);
        dateEnd = getMonthEnd(dateStart);
        break;
      case 4:
        dateStart = getYearStart(dateStart);
        dateEnd = getYearEnd(dateStart);
        break;
      default:
        break;
    }
    setToDoData((prevToDoData) => {
      return {
        ...prevToDoData,
        fixNavItem: id,
        fixInterval: { dateStart, dateEnd },
      }
    });   
  }

  function toglePeriod(direction) {
    let {fixInterval: {dateStart, dateEnd}} = toDoData;
    switch (toDoData.fixNavItem) {
      case 1:
        if (direction === 'next') {
          dateStart = addDays(dateStart, 1);
        } else {
          dateStart = addDays(dateStart, -1);
        }
        dateEnd = dateStart; 
        break;
      case 2:
        if (direction === 'next') {
          dateStart = addDays(dateEnd, 1);
          dateEnd   = getWeekEnd(dateStart);
        } else {
          dateEnd   = addDays(dateStart, -1);
          dateStart = getWeekStart(dateEnd);
        }
        break;
      case 3:
        if (direction === 'next') {
          dateStart = addDays(dateEnd, 1);
          dateEnd   = getMonthEnd(dateStart);
        } else {
          dateEnd   = addDays(dateStart, -1);
          dateStart = getMonthStart(dateEnd);
        }
        break;
      case 4:
        if (direction === 'next') {
          dateStart = addDays(dateEnd, 1);
          dateEnd   = getYearEnd(dateStart);
        } else {
          dateEnd   = addDays(dateStart, -1);
          dateStart = getYearStart(dateEnd);
        }
        break;
      default:
        break;
    }
    //setfixInterval({dateStart, dateEnd});
    setToDoData((prevToDoData) => {
      return {
        ...prevToDoData,
        fixInterval: { dateStart, dateEnd },
      }
    });   
  }

  function enterNewTask(taskText) {
    const newToDo = {
      id: uuid(),
      done: false,
      pinned: false,
      text: taskText,
      date: toDoData.fixInterval.dateStart, 
    };
    setToDoData((prevToDoData) => {
      return {
        ...prevToDoData,
        toDoTasks: [...prevToDoData.toDoTasks, newToDo],
      }
    }); 
  }

  function togleTaskDone (id) {
    setToDoData((prevToDoData) => {
      const idx = prevToDoData.toDoTasks.findIndex(el => el.id === id);
      const oldToDO = prevToDoData.toDoTasks[idx];
      const newToDo = {...oldToDO, done: !oldToDO.done}
      return {
        ...prevToDoData ,
        toDoTasks: [...prevToDoData.toDoTasks.slice(0, idx), newToDo, ...prevToDoData.toDoTasks.slice(idx + 1)],
      }
    }); 
  }

  function togleTaskPin (id) {
    setToDoData((prevToDoData) => {
      const idx = prevToDoData.toDoTasks.findIndex(el => el.id === id);
      const oldToDO = prevToDoData.toDoTasks[idx];
      const newToDo = {...oldToDO, pinned: !oldToDO.pinned}
      return {
        ...prevToDoData ,
        toDoTasks: [...prevToDoData.toDoTasks.slice(0, idx), newToDo, ...prevToDoData.toDoTasks.slice(idx + 1)],
      }
    }); 
  }

  function deleteTask (id) {
    setToDoData((prevToDoData) => {
      const idx = prevToDoData.toDoTasks.findIndex(el => el.id === id);
      return {
        ...prevToDoData ,
        toDoTasks: [...prevToDoData.toDoTasks.slice(0, idx), ...prevToDoData.toDoTasks.slice(idx + 1)],
      }
    }); 

  }

  function editTaskMemo (id, text) {
    setToDoData((prevToDoData) => {
      const idx = prevToDoData.toDoTasks.findIndex(el => el.id === id);
      const oldToDO = prevToDoData.toDoTasks[idx];
      const newToDo = {...oldToDO, memo: text}
      return {
        ...prevToDoData ,
        toDoTasks: [...prevToDoData.toDoTasks.slice(0, idx), newToDo, ...prevToDoData.toDoTasks.slice(idx + 1)],
      }
    }); 
  }

  function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('.');
  }

  function filterTodo(todos, dateFrom, dateTo) {
    return todos.filter((todo)=> {
        const formatedToDoDate = formatDate(todo.date);
        const compareWithDateFrom = formatedToDoDate.localeCompare(formatDate(dateFrom));
        const compareWithDateTo = formatedToDoDate.localeCompare(formatDate(dateTo));
        return (compareWithDateFrom >= 0) && (compareWithDateTo <=0)
    })
  }


  function groupTodo(todos) {
    const resArr = [];
    todos.forEach(element => {
        const formatedDate = formatDate(element.date);
        const found = resArr.find(el => el.date === formatedDate);
        if (found) {
            found.todos.push(element)
        } else {
            resArr.push({
                date: formatedDate, 
                todos: [element]
            })
        }
    });
    return resArr
  }

  return (
    <div className="App">
      <div className="wrapper">
        <header className="App-header">
          <Nav 
            navItems={navItems} 
            fixNavItem={toDoData.fixNavItem}
            toggleNav={toggleNav}
          />
        </header>
        <Period 
          //TODO use one prop and object destructuring
          dateStart={toDoData.fixInterval.dateStart}
          dateEnd={toDoData.fixInterval.dateEnd}
          period={toDoData.fixNavItem}
          toglePeriod={toglePeriod}
        />
        <div className="taskswrapper">
          <Newtask
            enterNewTask={enterNewTask}
          />
          <Tasks 
            tasks={groupTodo(filterTodo(toDoData.toDoTasks, toDoData.fixInterval.dateStart, toDoData.fixInterval.dateEnd))}
            togleTaskDone={togleTaskDone}
            togleTaskPin={togleTaskPin}
            deleteTask={deleteTask}
            contextMenu={contextMenu}
            setContextMenu={setContextMenu}
            editTaskMemo={editTaskMemo}
            showDate={toDoData.fixNavItem === 1 ? false : true}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
