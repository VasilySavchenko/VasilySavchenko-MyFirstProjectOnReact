import React from 'react';


function BtnComponent(props) {
  
  return (
    <div>
        <button className="stopwatch-btn stopwatch-btn-gre"
        onClick={props.start }>Start</button> 
      
        <button className="stopwatch-btn stopwatch-btn-red"
                  onClick={props.stop}>Stop</button>
       
          <button className="stopwatch-btn stopwatch-btn-gre"
                  onClick={props.resume}>Resume</button>

        <div>
          <button className="stopwatch-btn stopwatch-btn-yel"
                  onClick={props.reset}>Reset</button>

          <button className="stopwatch-btn stopwatch-btn-purpl"
                  onDoubleClick={props.stop}>Wait</button>
        </div>

    </div>
  );
}

export default BtnComponent;