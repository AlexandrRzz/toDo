import React from 'react';
import './Nav.css';

const Nav = ({ navItems, fixNavItem, toggleNav }) => {
  
  const elements = navItems
  .sort((a, b) => {
      return(a.id - b.id);
  })
  .map((item) => {
    function handleNavItemClick() {
      toggleNav(item.id);
    }
    let className = 'nav__item';
    if (item.id === fixNavItem) {
      className += ' nav__item-active';
    }
    return (
      <li className={className} key={item.id} onClick={handleNavItemClick}>{item.name}</li>
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

export default Nav;