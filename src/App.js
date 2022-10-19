import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import { useState } from 'react';


function App() {

const buttonTexts = ["blue","yellow","red","green"]

const [color,setColor] = useState("blue")
const changeColor = (newColor) => {
  setColor(newColor)
}


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {
          buttonTexts.map((button,i) => <Button changeColor={changeColor} color={color} text={button}/>)

        }

      </header>
     
    </div>
  );
}

export default App;
