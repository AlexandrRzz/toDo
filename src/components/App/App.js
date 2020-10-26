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
  const [fixInterval, setfixInterval] = useState({dateStart:new Date(), dateEnd: new Date});

  useEffect(() => {
    const storedFixNavItem = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_NAV)) || 1;
    setFixNavItem(storedFixNavItem)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_NAV, JSON.stringify(fixNavItem))
  }, [fixNavItem])

  function toggleNav(id) {
    setFixNavItem(id);
  }

  let date_p = new Date();

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
        />
      </div>
    </div>
  );
}

export default App;
