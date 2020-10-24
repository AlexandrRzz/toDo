import './App.css';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <header className="App-header">
          <nav className="nav">
            <ul className="nav__items">
              <li className="nav__item nav__item-active">Day</li>
              <li className="nav__item">Week</li>
              <li className="nav__item">Month</li>
              <li className="nav__item">Year</li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
}

export default App;
