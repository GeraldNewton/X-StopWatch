import { useEffect, useState } from "react";

function App() {
  let [time, setTime] = useState(0);
  let [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timeID;
    if (isRunning) {
      timeID = setInterval(() => {
        setTime((prevState) => prevState + 1);
      }, 1000);
    }
    return () => clearInterval(timeID);
  }, [isRunning]);

  let format = (time) => {
    let sec = time % 60;
    let min = time / 60;
    return `${Math.floor(min)}:${resolve(sec)}`;
  };

  let resolve = (sec) => {
    if (sec < 10) {
      return `0${sec}`;
    } else return sec;
  };

  let handleClickReset = () => {
    setTime(0);
    setIsRunning(false);
  };

  let handleClick = () => setIsRunning((prevState) => !prevState);

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>Time : {format(time)}</p>
      <button onClick={handleClick}>{isRunning ? `Stop` : `Start`}</button>
      <button onClick={handleClickReset}>Reset</button>
    </div>
  );
}

export default App;
