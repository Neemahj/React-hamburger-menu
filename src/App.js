import './App.css';
import { useState } from 'react';



function App() {
  const [showMenu, setShowMenu] = useState(false)
  const handleShowMenu=()=>{
    setShowMenu(!showMenu)
  }
  return (
    <div className={`App ${showMenu?"active":" "}`}>
      <div className="info">
        <img
          src="https://thumbs.dreamstime.com/b/animation-portrait-young-black-woman-dreadlocks-animation-portrait-young-black-woman-dreadlocks-background-179379079.jpg"
          alt="dreed"
        />
        <h1>Neemah</h1>
      </div>

      <div className="hamburger" onClick={handleShowMenu}>
        <div className="each-ham"></div>
        <div className="each-ham"></div>
        <div className="each-ham"></div>
      </div>
      
      <ul className="items" >
        <li>Home</li>
        <li>Contact Us</li>
        <li>Services</li>
        <li>About Us</li>
      </ul>
    </div>
  );
}


export default App;
