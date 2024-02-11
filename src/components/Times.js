import Patterns from './Patterns';
import Time from './Time';

export default function Times({userTime, utcTime}) {
  // display local time and patterns as well as utc time and patterns
    return (
        <div id='times-display'>
            <div id='user-time'>
                <h1>Local Time</h1>
                <Time time={userTime}/>
                <Patterns time={userTime}/>
            </div>
            <div id='utc-time'>
                <h1>UTC Time</h1>
                <Time time={utcTime}/>
                <Patterns time={utcTime}/>
            </div>
        </div>
    );
}
