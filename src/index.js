import React from 'react';
import ReactDOM from 'react-dom';

const date = new Date();
const currentTime = date.getHours();
var weekday = date.toLocaleString("default", { weekday: "long" });

let greeting;

if(currentTime < 12){
  greeting = "Good Morning"
}
else if(currentTime < 18){
  greeting = "Good evening"
}
else{
  greeting = "Good Night"
}



ReactDOM.render(
  <div>
<h1> {greeting}</h1>
<h2>Today is {weekday}</h2>
  </div>
  ,document.getElementById('root')
);
