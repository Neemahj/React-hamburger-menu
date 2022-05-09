import "./App.css";
import { useState } from "react";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header className={`App ${showMenu ? "active" : " "}`}>
      <div className="info">
        <img
          src="https://thumbs.dreamstime.com/b/animation-portrait-young-black-woman-dreadlocks-animation-portrait-young-black-woman-dreadlocks-background-179379079.jpg"
          alt="dreed"
        />
        <h1>Neemah</h1>
      </div>

      <div className="hamburger" onClick={handleShowMenu}>
        <div className="each-ham ham1"></div>
        <div className="each-ham ham2"></div>
        <div className="each-ham ham3"></div>
      </div>

      <ul className="items">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a> 
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#about">About Us</a>
        </li>
      </ul>
    </header>
  );
}

export default App;
