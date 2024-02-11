import primes from '../primes';
import '../styles/Patterns.css';

export default function Patterns({time}) {
    // For hours, minutes, total minutes, seconds, total seconds, and time as an integer, display if those numbers are prime
	let secondsPrime = primes.includes(time.seconds);
	let minutePrime = primes.includes(time.minutes);
	let hourPrime = primes.includes(time.hours);
	let timePrimeSeconds = primes.includes(time.hours * 60 * 60 + time.minutes * 60 + time.seconds);
	let timePrimeMinutes = primes.includes(time.hours * 60 + time.minutes);
	let writtenPrime = primes.includes(time.hours * 10000 + time.minutes * 100 + time.seconds);
	// Find if prime time based on meeting all prior conditions
	let primeTime = secondsPrime && minutePrime && hourPrime && timePrimeMinutes && writtenPrime && timePrimeSeconds;
	return (
		<>
		{primeTime ?
			<div className='prime-time'>It's a Prime Time</div>
			:
			<div className={'patterns'}>
				<div className='pattern'>
					<div className={String(hourPrime)}></div>
					<p className='pattern-name'>Hours</p>
				</div>
				<div className='pattern'>
					<div className={String(timePrimeMinutes)}></div>
					<p className='pattern-name'>Time Passed (Min.)</p>
				</div>
				<div className='pattern'>
					<div className={String(minutePrime)}></div>
					<p className='pattern-name'>Minutes</p>
				</div>
				<div className='pattern'>
					<div className={String(timePrimeSeconds)}></div>
					<p className='pattern-name'>Time Passed (Sec.)</p>
				</div>
				<div className='pattern'>
					<div className={String(secondsPrime)}></div>
					<p className='pattern-name'>Seconds</p>
				</div>
				<div className='pattern'>
					<div className={String(writtenPrime)}></div>
					<p className='pattern-name'>Written Time</p>
				</div>
			</div> 
		}
	</>
	);
}
