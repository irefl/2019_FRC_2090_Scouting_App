import React from 'react';
import GeneralBarChart from '../GeneralBarChart/GeneralBarChart';

const CargoScores = ({ cargoScores, teamsArr }) => {
    let data = []
    teamsArr.forEach(team => {
        if (cargoScores[team]) {
            data.push({
                name: team,
                count: cargoScores[team]
            });
        }
    });

    return <>
        <h2>Average cargo scores</h2>
        <GeneralBarChart data={data} dataKey={"count"} />
    </>
}

export default CargoScores;