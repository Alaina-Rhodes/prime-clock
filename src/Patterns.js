import primes from './primes'

export default function Patterns({time}) {
    // For minutes, hours, total minutes, and time as an integer, display if those numbers are prime
    return (
    <div className='patterns'>
        <div className='pattern'>
            <div className={primes.includes(time.minutes) ? 'true' : 'false'}></div>
            <p className='pattern-name'>Minutes </p>
        </div>
        <div className='pattern'>
            <div className={primes.includes(time.hours) ? 'true' : 'false'}></div>
            <p className='pattern-name'>Hours </p>
        </div>
        <div className='pattern'>
            <div className={primes.includes(time.minutes + time.hours * 60) ? 'true' : 'false'}></div>
            <p className='pattern-name'>Time Passed </p>
        </div>
        <div className='pattern'>
            <div className={primes.includes(time.minutes + time.hours * 100) ? 'true' : 'false'}></div>
            <p className='pattern-name'>Written Time </p>
        </div>
    </div>
    )
}