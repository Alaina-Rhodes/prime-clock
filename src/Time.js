export default function Time({time}) {
    // display time given
    return <h2 className='time'>
        {time.hours + ':' + time.minutes + ':' + time.seconds}
    </h2>
}