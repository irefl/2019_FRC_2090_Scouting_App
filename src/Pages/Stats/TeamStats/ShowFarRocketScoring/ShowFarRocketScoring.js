import React from 'react';
import { farRocket } from '../GetDataObjects/GetDataObjects';
import MatchScoreChart from '../Charts/MatchScoreChart/MatchScoreChart';

const ShowFarRocketScoring = ({ matchData }) => {
    let data = farRocket(matchData);
    return <>
        <h3>Total Scored on Relative Right Rocket (hatch + cargo combined)</h3>
        <MatchScoreChart data={data} />
    </>
}

export default ShowFarRocketScoring;