import React from 'react';


function DisplayComponent(props) {
  return (
    <div>
      
       <span>{(props.time.hours >= 10)? props.time.hours : "0"+ props.time.hours}</span>&nbsp;:&nbsp;
       <span>{props.time.minutes >= 10? props.time.minutes : "0"+ props.time.minutes}</span>&nbsp;:&nbsp;
       <span>{props.time.seconds >= 10? props.time.seconds : "0"+ props.time.seconds}</span>
    </div>
  );
}

export default DisplayComponent;