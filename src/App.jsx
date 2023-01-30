import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useInterval } from './useInterval';

function App() {
  const [count, setCount] = useState(0);
  const [level, setLevel] = useState(0);
  const [color, setColor] = useState('#000');
  const [myColor, setMyColor] = useState('#000');
  const [delay, setDelay] = useState(1000);
  const [isRunning, setIsRunning] = useState(false);

  const colors = ['#f00', '#ff9a00', '#ffec00', '#beff00', '#00c200', '#65ffff', '#3875db', '#8700a1', '#f21eec'];

  const setRandomColor = () => {
    let randomColor = colors[Math.floor(Math.random() * colors.length)];

    console.log(randomColor, color);
    while(randomColor === color) {
      randomColor = colors[Math.floor(Math.random() * colors.length)];
    }

    setColor(
      randomColor
    )
  }

  const catchColor = (e) => {
    console.log(e);
    console.log(color);
    // pick myColor
    // if (level === 0) {
    //   setMyColor(color);
    // }
    // console.log(myColor);

    setIsRunning(false);
  }

  useInterval(() => {    
    setRandomColor();
  }, isRunning ? delay : null);

  const pickMyColor = (c) => {
    console.log(c);
    setMyColor(c);
    setLevel(1);
    setIsRunning(true);
    return;
  }

  const renderBlocks = () => {
    return colors.map((c, i) => <button onClick={() => pickMyColor(c)}   className="colorBlock" style={{backgroundColor: c}} key={i}></button>)
  }

  return (
    <div className="App">
    {/* <div className="App" style={{backgroundColor: color}}> */}

      <h1>Catch the Color</h1>

      {level === 0 &&
        <>
          <h2>Pick your color:</h2>
          <div className="wrapper">
            {renderBlocks()}
          </div>
        </>
      }
      {level !==0 &&
        <div className="colorZone" style={{backgroundColor: color}} onClick={() => catchColor()}>
        
        <h2>Click when you see your color</h2>
        </div>
      }

    </div>
  )
}

export default App
