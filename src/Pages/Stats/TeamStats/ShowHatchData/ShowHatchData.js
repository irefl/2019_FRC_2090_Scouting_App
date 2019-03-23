import React from 'react';
import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Line } from 'recharts';
import { hatchScores } from '../GetDataObjects/GetDataObjects';

// This is a quick function to turn the scores from an array into an object.
// The object returned is in the format:
// {
//     match: ##,
//     score: ##
// }
//
// The array is x
// matchL is not used, but I was too lazy to delete it (if I did I might've gotten errors)
// 
// Also the function is kinda ugly and not very easy to modify because I use single letters
// as variable names. Sorry, i wanted to make this quickly.
// toDataObj = (x, matchL) => {
//     let objList = [];
//     x.forEach((d, i) => {
//         objList.push({ match: i + 1, score: Number(d) });
//     })
//     return objList;
// }

const ShowHatchData = ({ matchData }) => {
    console.log(matchData);
    console.log(hatchScores(matchData));
    return <>
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