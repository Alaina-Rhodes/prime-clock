import {useState} from 'react';
import Patterns from './Patterns';
import Time from './Time';
import './App.css';

export default function App() {
  let [time, setTime] = useState(Date.now())
  // update times every second
  let updateTime = () => {
    setTime(Date.now())
  }
  let date = new Date()
  setInterval(updateTime, 1000)
  
  // get userTime and utcTime for clocks
  let userTime = {seconds: date.getSeconds(), minutes: date.getMinutes(), hours: date.getHours()}
  let utcTime = {seconds: parseInt(time / 1000) % 60, minutes: parseInt(time / 60000) % 60, hours: parseInt(time / 3600000) % 24}
  return (
    <div>
      <div id='user-time'>
        <Time time={userTime}/>
        <Patterns time={userTime}/>
      </div>
      <div id='utc-time'>
        <Time time={utcTime}/>
        <Patterns time={utcTime}/>
      </div>
    </div>
  );
}