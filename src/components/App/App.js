import React, { useState, useEffect } from 'react';
import './App.css';

import Nav from '../Nav/Nav';
import Period from '../Period/Period';
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
  const [toDoData, setToDoData] = useState({fixNavItem: 1,
    fixInterval: { dateStart: new Date(), dateEnd: new Date() },});

  useEffect(() => {
    console.log("useEffect");
    const storedToDoData = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY_TODO), function(key, value) {
        if (key === 'dateStart' || key === 'dateEnd') return new Date(value);
        return value;
      }
    ) || {
      fixNavItem: 1,
      fixInterval: { dateStart: new Date(), dateEnd: new Date() },
    };
    console.log("useEffect",storedToDoData);
    setToDoData(storedToDoData);
  }, []);

  useEffect(() => {
    console.log("useEffect before saving",toDoData);
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
  console.log("before rendering", toDoData);
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
      </div>
    </div>
  );
}

export default App;
