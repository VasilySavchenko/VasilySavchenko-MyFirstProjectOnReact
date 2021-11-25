import React, {useState} from 'react';
import DisplayComponent from './Components/DisplayComponent';
import BtnComponent from './Components/BtnComponent';
import './App.css';

function App() {
  const [time, setTime] = useState({ seconds:0,minutes:0,hours:0});
  const [interval, setInterval] = useState();

  let  updatedSeconds = time.seconds
  let updatedMinutes = time.minutes
  let updatedHours = time.hours;

 

   const start = () => {
    run();
    setInterval(setInterval(run, 1));
  };

  const run = () => {
    if(updatedSeconds === 60){
      updatedMinutes++;
      updatedSeconds = 0;
    }
     if(updatedMinutes === 60){
      updatedHours++;
      updatedMinutes = 0;
    }
    if(updatedHours === 12){
      updatedMinutes = 0;
    }
   
    
   updatedSeconds++
   
    return setTime({ seconds:updatedSeconds, minutes:updatedMinutes, hours:updatedHours});
  };

  const stop = () => {
    clearInterval(interval);
    
  };

  const reset = () => {
    clearInterval(interval);
    
    setTime({ seconds:0, minutes:0, hours:0})
  };

  const wait = ()=> {
    clearInterval(interval);
 

  }

  const resume = () => start();


  return (
    <div className="main-section">
     <div className="clock-holder">
          <div className="stopwatch">
               <DisplayComponent time={time}/>
               <BtnComponent resume={resume} reset={reset} stop={stop} start={start} wait = {wait}/>
          </div>
     </div>
    </div>
  );
}

export default App;
