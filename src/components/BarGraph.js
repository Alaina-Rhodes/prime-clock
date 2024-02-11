// return bar graph given data (sorted by smallest x value) and naming markers

export default function BarGraph({data, title, xAxis, yAxis}) {
    // return if data does not exist or if data is not formatted in number form
    if (data === null || typeof data !== 'object' || Object.keys(data).length === 0) {
        return null;
    }
    for (let i of Object.keys(data)) {
        if (typeof data[i] !== 'number') {
            return null
        }
    }
    // get range of values. if the range max is less than five times larger than the min, set min to 0
    let range = [Math.min(...Object.values(data)), Math.max(...Object.values(data))];
    if (range[1] / range[0] >= 2) {
        range[0] = Math.max(0, range[1] / 5 - range[0]);
    }
    let rangeValues = [...Array(6)].map((v, i) => {return parseInt((range[1] - range[0]) * (5 - i) / 5 + range[0])});
    // create graph with parameters provided
    let values = Object.keys(data).length;
    let graphHeight = 400;
    let graphWidth = 700;
    let graphGap = 50;
    return (
        <div className='bar-graph graph'>
            <h2 className='graph-title'>{title}</h2>
            <h3 className='x-axis'>{xAxis}</h3>
            <h3 className='y-axis'>{yAxis}</h3>
            <svg width={graphWidth} height={graphHeight}>
                {Object.keys(data).map((v,i) => {return <rect x={graphWidth / values * i} y={graphHeight - (data[v] - range[0]) / (range[1] - range[0]) * graphHeight} width={(graphWidth - graphGap) / values} height={data[v] / range[1] * graphHeight} fill='#c6c'></rect>})}
            </svg>
            <div className='x-values'>
                {Object.keys(data).map((v) => {return <p className='x-val' style={{ width: `calc(650px / ${values})`, marginRight: `calc(50px / ${values})` }}>{v}</p>})}
            </div>
            <div className='y-values'>
                {rangeValues.map((v) => {return <p className='y-val'>{v}</p>})}
            </div>
        </div>
    );
}