import React, { useState, useEffect } from 'react';
import './App.css';

import Nav from '../Nav/Nav';
import Period from '../Period/Period';

const LOCAL_STORAGE_KEY_NAV = 'todoApp.nav';

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

  const [fixNavItem, setFixNavItem] = useState();
  const [fixInterval, setfixInterval] = useState({dateStart:new Date(), dateEnd: new Date()});

  useEffect(() => {
    const storedFixNavItem = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_NAV)) || 1;
    setFixNavItem(storedFixNavItem)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_NAV, JSON.stringify(fixNavItem))
  }, [fixNavItem])

  function toggleNav(id) {
    let dateStart = new Date();
    let dateEnd = new Date();
    switch (id) {
      case 2:
        dateStart = new Date(2020, 9, 26);
        dateEnd = new Date(2020,10, 1);
        break;
      case 3:
        dateStart = new Date(2020, 9, 1);
        dateEnd = new Date(2020, 9, 31);
        break;
      case 4:
        dateStart = new Date(2020, 0, 1);
        dateEnd = new Date(2020, 11, 31);
        break;
      default:
        break;
    }  
    setFixNavItem(id);
    setfixInterval({dateStart, dateEnd});
  }
  return (
    <div className="App">
      <div className="wrapper">
        <header className="App-header">
          <Nav 
            navItems={navItems} 
            fixNavItem={fixNavItem}
            toggleNav={toggleNav}
          />
        </header>
        <Period 
          dateStart={fixInterval.dateStart}
          dateEnd={fixInterval.dateEnd}
          period={fixNavItem}
        />
      </div>
    </div>
  );
}

export default App;
