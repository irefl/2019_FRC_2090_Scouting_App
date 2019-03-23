import React from 'react';
import { calculateClimb } from '../GetDataObjects/GetDataObjects';
import MatchScoreChart from '../Charts/MatchScoreChart/MatchScoreChart';

const ShowClimbs = ({ matchData }) => {
    let data = calculateClimb(matchData);
    return <>
        <h3>Climb for each match</h3>
        <MatchScoreChart data={data} />
    </>
}

export default ShowClimbs;