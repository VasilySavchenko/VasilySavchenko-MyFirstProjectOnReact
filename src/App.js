
import React, {useState} from 'react';
import DisplayComponent from './Components/DisplayComponent';
import BtnComponent from './Components/BtnComponent';
import './App.css';

function App() {
  const [time, setTime] = useState({ seconds:0,minutes:0,hours:0});
  const [interv, setInterv] = useState();


  const start = () => {
    run();
  
    setInterv(setInterval(run, 10));
  };

let  updatedSeconds = time.seconds
  let updatedMinutes = time.minutes
  let updatedHours = time.hours;


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
    clearInterval(interv);
  };


  const reset = () => {
    clearInterval(interv);
 
    setTime( {seconds:0, minutes:0, hours:0})
  };

  const resume = () => start();

  


  return (
    <div className="main-section">
     <div className="clock-holder">
          <div className="stopwatch">
               <DisplayComponent time={time}/>
               <BtnComponent  resume={resume} reset={reset} stop={stop} start={start}/>
          </div>
     </div>
    </div>
  );
}

export default App;