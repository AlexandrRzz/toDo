import React, { useState } from 'react';
import './App.css';

import Nav from '../Nav/Nav';


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

  const [navItems, setNavItems] = useState(navItemsInit);

  function togglePeriod(id) {
    const newNavItems = [...navItems].map(item => {return {...item, selected: false}});
    const navItem = newNavItems.find(item => item.id === id);
    navItem.selected = true;
    setNavItems(newNavItems);
  }

  return (
    <div className="App">
      <div className="wrapper">
        <header className="App-header">
          <Nav navItems={navItems} togglePeriod={togglePeriod} />
        </header>
      </div>
    </div>
  );
}

export default App;
