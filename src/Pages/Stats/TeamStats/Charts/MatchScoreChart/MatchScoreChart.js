import React from 'react';
import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Line } from 'recharts';

const MatchScoreChart = ({ data }) => {
    return <LineChart width={300} height={250} data={data} margin={{ top: 0, right: 0, left: 10, bottom: 25 }}>
        <XAxis dataKey="match" domain={[1, "auto"]} allowDecimals={false} label={{ value: "Match", position: "bottom" }} type="number" />
        <YAxis dataKey="score" domain={["auto", "auto"]} label={{ value: "Count", angle: -90, position: "insideLeft" }} />
        <CartesianGrid stroke="#ddd" strokeDashArray="3 3" />
        <Tooltip />
        <Line dot={true} type="monotone" dataKey="score" stroke={"#20508B"} fill={"#20508B"} />
    </LineChart>
}

export default MatchScoreChart;