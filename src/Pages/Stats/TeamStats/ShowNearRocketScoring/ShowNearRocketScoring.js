import React from 'react';
import { nearRocket } from '../GetDataObjects/GetDataObjects';
import MatchScoreChart from '../Charts/MatchScoreChart/MatchScoreChart';

const ShowNearRocketScoring = ({ matchData }) => {
    let data = nearRocket(matchData);
    return <>
        <h3>Total Scored on Near Rocket (hatch + cargo combined)</h3>
        <MatchScoreChart data={data} />
    </>
}

export default ShowNearRocketScoring;