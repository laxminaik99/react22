import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentIcon, setCurrentIcon] = useState('favicon.ico'); // Set the initial icon

  const changeIcon = (newIcon) => {
    setCurrentIcon(newIcon);
    const link = document.querySelector("link[rel*='icon']");
    link.href = newIcon;
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple Page with Buttons</h1>
        <div className="button-container">
          <button className="button" onClick={() => changeIcon('icon1.ico')}>Icon 1</button>
          <button className="button" onClick={() => changeIcon('icon2.ico')}>Icon 2</button>
          <button className="button" onClick={() => changeIcon('icon3.ico')}>Icon 3</button>
          {/* Add more buttons for other icons */}
        </div>
      </header>
    </div>
  );
}

export default App;
