import Clock from './Clock'
export default function Clocks({time}) {
    // Convert time zone string into an object with hours, minutes, seconds, and the name of the zone
    function timeStringToObject(str, timeZone) {
        let parts = str.split(':')
        return {
                    minutes: parseInt(parts[1]),
                    seconds: parseInt(parts[2]),
                    hours: parseInt(parts[0].substring(parts[0].length - 2, parts[0].length)),
                    name: timeZone.split('/')[1].replace('_', ' ')
                }
    }
    // For entered time zones, create an array of time objects to be displayed as analog clocks
    let timeZones = ['America/New_York', 'Europe/London', 'Asia/Hong_Kong', 'Australia/Sydney', 'Asia/Tokyo', 'Europe/Berlin']
    let times = []
    for (let i of timeZones) {
        times.push(timeStringToObject(time.toLocaleString('en-GB', { timeZone: i }), i))
    }
    return <div id='clocks'>
        {times.map((v) => {
            console.log(v)
            return <Clock time={v}/>
        })}
    </div>
}