import React from 'react';
import './App.css';


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

const Nav = ({ navItems }) => {
  const elements = navItems
  .sort((a, b) => {
      return(a.id - b.id);
  })
  .map((item) => {
      let className = 'nav__item';
      if (item.selected) {
        className += ' nav__item-active';
      }
      return (
        <li className={className} key={item.id}>{item.name}</li>
      );
  });
  return (
      <nav className="nav">
        <ul className="nav__items">
          {elements}
        </ul>
      </nav>
  )
};

export default App;
