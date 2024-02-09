import Times from './Times';
import Clocks from './Clocks';
import {useState} from 'react'
import './App.css';

export default function App() {
  let [time, setTime] = useState(Date.now())
  // Update times every second
  let updateTime = () => {
    setTime(Date.now());
  };
  let date = new Date();
  setInterval(updateTime, 1000);

  // Get userTime and utcTime for clocks
  let userTime = {seconds: date.getSeconds(), minutes: date.getMinutes(), hours: date.getHours()};
  let utcTime = {seconds: parseInt(time / 1000) % 60, minutes: parseInt(time / 60000) % 60, hours: parseInt(time / 3600000) % 24};
  
  // Experiment times for development userTime is not a prime time, utcTime is a prime time
  // let userTime = {seconds: 29, minutes: 37, hours: 15}
  // let utcTime = {seconds: 19, minutes: 7, hours: 2}
  return (
    <div>
      <Times userTime={userTime} utcTime={utcTime}/>
      <Clocks time={date}/>
    </div>
  );
}
