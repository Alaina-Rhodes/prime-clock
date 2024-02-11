import '../styles/About.css';

export default function About() {
    return (
        <div id='about'>
            <h2>What Is A Prime Time?</h2>
            <p>A prime time is a time which meets the folloring criteria:</p>
            <ul>
                <li>It has a prime number for the hours, minutes, and seconds</li>
                <li>The number derived from writing the time out without colons is prime</li>
                <li>The number of minutes passed in the day is prime</li>
                <li>The number of seconds passed in the day is prime</li>
            </ul>
            <h2>How Many Prime Times Are There?</h2>
            <p>Using the above criteria, 86. This means only around 0.1% of times in a day are prime times</p>
        </div>
    );
}