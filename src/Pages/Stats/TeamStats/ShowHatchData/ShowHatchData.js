import React from 'react';
import { hatchScores } from '../GetDataObjects/GetDataObjects';
import MatchScoreChart from '../Charts/MatchScoreChart/MatchScoreChart';

const ShowHatchData = ({ matchData }) => {
    let data = hatchScores(matchData);
    return <>
        <h3>Total Hatches Scored Per Match</h3>
        <MatchScoreChart data={data} />
    </>
}

export default ShowHatchData;