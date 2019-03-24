import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, Tooltip
} from 'recharts';

const CustomTick = ({ x, y, stroke, payload }) => {
    return <>
        <g transform={`translate(${x},${y})`}>
            <text x={0} y={0} dy={
                window.innerWidth < 1000 ? 3 : 6} textAnchor="end" fill="#666" transform="rotate(-90)" fontSize={
                    window.innerWidth < 1000 ? 8 : 16}>{payload.value}</text>
        </g>
    </>
}

const GeneralBarChart = ({ data, dataKey }) => {
    return <BarChart
        width={window.innerWidth < 1000 ? 300 : 1000}
        height={250}
        data={data}
        margin={{ top: 0, right: 0, left: 0, bottom: 13 }}>
        <XAxis dataKey="name" interval={0} tick={<CustomTick />} />
        <YAxis label={{ value: dataKey, angle: -90, position: "insideLeft" }} />
        <Tooltip />
        {/* <Legend /> */}
        <Bar dataKey={dataKey} fill="#20508B" />
    </BarChart>
}

export default GeneralBarChart;