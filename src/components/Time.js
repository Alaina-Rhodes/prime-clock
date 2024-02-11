export default function Time({time}) {
    // display time given
    return (
        <h2 className='time'>
	        {(time.hours > 9 ? time.hours : '0' + time.hours) + ':' + (time.minutes > 9 ? time.minutes : '0' + time.minutes) + ':' + (time.seconds > 9 ? time.seconds : '0' + time.seconds)}
        </h2>
    );
}
