import Times from '../components/Times';
import Clocks from '../components/Clocks';
import {useState} from 'react';
import '../styles/PrimeClocks.css';

export default function PrimeClocks() {
	const [time, setTime] = useState(Date.now());
	// Update times each second
	const updateTime = () => {
		setTime(Date.now());
	}
	let date = new Date();
	setInterval(updateTime, 1000);
	// Get userTime and utcTime for clocks
	let userTime = {seconds: date.getSeconds(), minutes: date.getMinutes(), hours: date.getHours()};
	let utcTime = {seconds: parseInt(time / 1000) % 60, minutes: parseInt(time / 60 / 1000) % 60, hours: parseInt(time / 60 / 60 / 1000) % 24};
    // Experiment values from time
	// let userTime = {seconds: 29, minutes: 37, hours: 15};
	// let utcTime = {seconds: 19, minutes: 7, hours: 2};
	return (
		<div id='prime-clocks'>
			<Times userTime={userTime} utcTime={utcTime}/>
			<Clocks time={date}/>
		</div>
	);
}
