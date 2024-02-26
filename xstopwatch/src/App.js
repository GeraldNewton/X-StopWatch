// import { useEffect, useState } from "react";

// function App() {
//   let [time, setTime] = useState(0);
//   let [isRunning, setIsRunning] = useState(false);

//   useEffect(() => {
//     let timeID;
//     if (isRunning) {
//       timeID = setInterval(() => {
//         setTime((prevState) => prevState + 1);
//       }, 1000);
//     }
//     return () => clearInterval(timeID);
//   }, [isRunning]);

//   let format = (time) => {
//     let sec = time % 60;
//     let min = time / 60;
//     console.log(Math.floor(min));
//     return `${Math.floor(min)}:${resolve(sec)}`;
//   };

//   let resolve = (sec) => {
//     if (sec < 10) {
//       return `0${sec}`;
//     } else return sec;
//   };

//   let handleClickReset = () => {
//     setTime(0);
//     setIsRunning(false);
//   };

//   let handleClick = () => setIsRunning((prevState) => !prevState);

//   return (
//     <div>
//       <h1>Stopwatch</h1>
//       <p>Time : {format(time)}</p>
//       <button onClick={handleClick}>{isRunning ? `Stop` : `Start`}</button>
//       <button onClick={handleClickReset}>Reset</button>
//     </div>
//   );
// }

// export default App;

import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const startTimer = () => {
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const stopTimer = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  const handleStartStop = () => {
    if (isRunning) {
      stopTimer();
    } else {
      startTimer();
    }
  };

  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <div className="time">Time : {formatTime(time)}</div>
      <div className="buttons">
        <button onClick={handleStartStop}>
          {isRunning ? 'Stop' : 'Start'}
        </button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default App;


