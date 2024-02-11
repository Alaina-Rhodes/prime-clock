import BarGraph from '../components/BarGraph';
import primes from '../primes';
import '../styles/PrimeData.css';

export default function PrimeData() {
    let primeTimes = [];
    let appearancesMap = {};
    let hoursMap = {};
    for (let i of primes.slice(0, 17)) {
        appearancesMap[i] = 0;
    }
    for (let i of primes.slice(0, 9)) {
        hoursMap[i] = 0;
    }
    for (let i of primes.slice(0, 9)) {
        for (let j of primes.slice(0, 17)) {
            for (let k of primes.slice(0, 17)) {
                if (primes.includes(i * 60 * 60 + j * 60 + k) && primes.includes(i * 10000 + j * 100 + k) && primes.includes(i * 60 + j)) {
                    primeTimes.push([i, j, k]);
                    appearancesMap[i]++;
                    appearancesMap[j]++;
                    appearancesMap[k]++;
                    hoursMap[i]++;
                }
            }
        }
    }
    return (
		<div id='prime-data'>
            <BarGraph title='Appearances of Prime Numbers in Prime Times' xAxis='Prime Numbers' yAxis='Appearances' data={appearancesMap}/>
            <BarGraph title='Number of Prime Times Per Hour' xAxis='Hour' yAxis='Prime Times' data={hoursMap}/>
        </div>
	);
}
