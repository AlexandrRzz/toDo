import React from 'react';
import './App.css';

import Nav from '../Nav/Nav';


function App() {
  const navItems = [
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


  return (
    <div className="App">
      <div className="wrapper">
        <header className="App-header">
          <Nav navItems={navItems}/>
        </header>
      </div>
    </div>
  );
}

export default App;
