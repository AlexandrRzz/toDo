import React, { useState, useEffect } from 'react';
import './App.css';

import Nav from '../Nav/Nav';
import Period from '../Period/Period';
import Newtask from '../Newtask/Newtask';
import Tasks from '../Tasks/Tasks';

import {addDays,getWeekStart, getWeekEnd, getMonthStart, getMonthEnd, getYearStart, getYearEnd} from '../../helpers/helpers.date';


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

  const tasks = [
    {
      id: 1,
      done: false,
      pinned: true,
      text: 'task 1',
      memo: 'memo for task1'
    },
    {
      id: 2,
      done: true,
      pinned: true,
      text: 'task 2',
      memo: 'memo for task2'
    },
    {
      id: 3,
      done: false,
      pinned: false,
      text: 'task 3'
    },
    {
      id: 4,
      done: true,
      pinned: true,
      text: 'task 4'
    },
    {
      id: 5,
      done: true,
      pinned: false,
      text: 'task 5',
      memo: 'memo for task1'
    },
    {
      id: 6,
      done: true,
      pinned: false,
      text: 'task 6'
    }
  ];

  const [toDoData, setToDoData] = useState({fixNavItem: 1,
    fixInterval: { dateStart: new Date(), dateEnd: new Date() },});

  useEffect(() => {
    const storedToDoData = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY_TODO), function(key, value) {
        if (key === 'dateStart' || key === 'dateEnd') return new Date(value);
        return value;
      }
    ) || {
      fixNavItem: 1,
      fixInterval: { dateStart: new Date(), dateEnd: new Date() },
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
    setToDoData({
      fixNavItem: id,
      fixInterval: { dateStart, dateEnd },
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
    setToDoData({
      ...toDoData,
      fixInterval: { dateStart, dateEnd },
    });     
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
          <Newtask/>
          <Tasks 
            tasks={tasks}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
