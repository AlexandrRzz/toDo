import React, { useState, useEffect } from 'react';
import './App.css';

import Nav from '../Nav/Nav';
import Period from '../Period/Period';

const LOCAL_STORAGE_KEY_NAV = 'todoApp.nav';

function App() {
  const navItemsInit = [
    { 
      id : 1,
      name : 'Day',
      selected : true
    },
    { 
      id : 2,
      name : 'Week',
      selected : false
    },
    { 
      id : 3,
      name : 'Month',
      selected : false
    },
    { 
      id : 4,
      name : 'Year',
      selected : false
    }
  ];

  const [navItems, setNavItems] = useState([]);
  const [fixInterval, setfixInterval] = useState({dateStart:new Date(), dateEnd: new Date});

  useEffect(() => {
    const storedNavItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_NAV)) || navItemsInit;
    setNavItems(storedNavItems)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_NAV, JSON.stringify(navItems))
  }, [navItems])

  function toggleNav(id) {
    const newNavItems = [...navItems].map(item => {return {...item, selected: false}});
    const navItem = newNavItems.find(item => item.id === id);
    navItem.selected = true;
    setNavItems(newNavItems);
  }

  let date_p = new Date();

  return (
    <div className="App">
      <div className="wrapper">
        <header className="App-header">
          <Nav navItems={navItems} toggleNav={toggleNav} />
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
