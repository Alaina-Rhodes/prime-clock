import primes from './primes'

export default function Clock({time}) {
    // For hours, minutes, total minutes, seconds, total seconds, and time as an integer, display if those numbers are prime
	let secondsPrime = primes.includes(time.seconds);
	let minutePrime = primes.includes(time.minutes);
	let hourPrime = primes.includes(time.hours);
	let timePrimeSeconds = primes.includes(time.hours * 60 * 60 + time.minutes * 60 + time.seconds);
	let timePrimeMinutes = primes.includes(time.hours * 60 + time.minutes);
	let writtenPrime = primes.includes(time.hours * 10000 + time.minutes * 100 + time.seconds);
	// Find if prime time based on meeting all prior conditions
    let primeTime = secondsPrime && minutePrime && hourPrime && timePrimeMinutes && writtenPrime && timePrimeSeconds;
    // Create clock with total size, inner radius, arm lengths, and arm widths defined below
    let clockSize = 134;
    let centerPoint = clockSize / 2;
    let clockRadius = 65;
    let smallArmWidth = 2;
    let bigArmWidth = 4;
    let hourHeight = 35;
    let minuteHeight = 50;
    let secondHeight = 60;
    return (
        <div className={`clock`}>
            <svg width={clockSize} height={clockSize}>
                <circle stroke='black' strokeWidth={centerPoint - clockRadius} cx={centerPoint} cy={centerPoint} r={clockRadius} fill='#eee' ></circle>
                <rect width={smallArmWidth} height={secondHeight} fill='red' x={centerPoint - smallArmWidth / 2} y={centerPoint - secondHeight} transform={`rotate(${time ? time.seconds * 6 : '0'} ${centerPoint + ' ' + centerPoint})`}></rect>
                <rect width={bigArmWidth} height={minuteHeight} fill='black' x={centerPoint - bigArmWidth / 2} y={centerPoint - minuteHeight} transform={`rotate(${time ? time.minutes * 6 : '0'} ${centerPoint + ' ' + centerPoint})`}></rect>
                <rect width={bigArmWidth} height={hourHeight} fill='black' x={centerPoint - bigArmWidth / 2} y={centerPoint - hourHeight} transform={`rotate(${time ? (time.hours % 12) * 30 : '0'} ${centerPoint + ' ' + centerPoint})`}></rect>
                <circle cx={centerPoint} cy={centerPoint} r='3' fill='black'></circle>
            </svg>
            <p className={`clock-name ${primeTime ? 'true-clock' : ''}`}>
                {time.name}
            </p>
        </div>
    );
}