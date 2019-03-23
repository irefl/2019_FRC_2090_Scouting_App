import React from 'react';
import { cargoScores } from '../GetDataObjects/GetDataObjects';
import MatchScoreChart from '../Charts/MatchScoreChart/MatchScoreChart';

const ShowCargoData = ({ matchData }) => {
    let data = cargoScores(matchData);
    return <>
        <h3>Total Cargo Scored Per Match (in any goal)</h3>
        <MatchScoreChart data={data} />
    </>
}

export default ShowCargoData;