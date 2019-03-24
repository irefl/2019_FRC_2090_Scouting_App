import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, Tooltip
} from 'recharts';

const GeneralBarChart = ({ data, dataKey }) => {
    return <BarChart
        width={window.innerWidth < 1000 ? 300 : 1000}
        height={250}
        data={data}
        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <XAxis dataKey="name" />
        <YAxis label={{ value: dataKey, angle: -90, position: "insideLeft" }} />
        <Tooltip />
        {/* <Legend /> */}
        <Bar dataKey={dataKey} fill="#20508B" />
    </BarChart>
}

export default GeneralBarChart;