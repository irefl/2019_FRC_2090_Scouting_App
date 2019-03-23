import React from 'react';
import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Line } from 'recharts';
import { hatchScores } from '../GetDataObjects/GetDataObjects';

const ShowHatchData = ({ matchData }) => {
    let data = hatchScores(matchData);
    return <>
        <h3>Total Hatches Scored Per Match</h3>
        <LineChart width={300} height={250} data={data} margin={{ top: 0, right: 0, left: 10, bottom: 25 }}>
            <XAxis dataKey="match" domain={[1, "auto"]} allowDecimals={false} label={{ value: "Matches", position: "bottom" }} type="number" />
            <YAxis dataKey="score" domain={["auto", "auto"]} label={{ value: "Score", angle: -90, position: "insideLeft" }} />
            <CartesianGrid stroke="#ddd" strokeDashArray="3 3" />
            <Tooltip />
            <Line dot={true} type="monotone" dataKey="score" stroke={"#20508B"} fill={"#20508B"} />
        </LineChart>
        {/* <LineChart width={250} height={200} data={this.toDataObj(switchScores, matchNumbers)} margin={{ top: 0, right: 0, left: 10, bottom: 25 }}>
            <XAxis dataKey="match" domain={["auto", "auto"]} label={{ value: "Matches", position: "bottom" }} type="number" />
            <YAxis dataKey="score" domain={["auto", "auto"]} label={{ value: "Score", angle: -90, position: 'insideLeft' }} />
            <CartesianGrid stroke="#eee" strokeDashArray="3 3" />
            <Tooltip />
            <Line dot={true} type="monotone" dataKey="score" stroke={"#ff0000"} fill={"#ff0000"} />
        </LineChart> */}
    </>
}

export default ShowHatchData;