import React from 'react';
import { allScores } from '../GetDataObjects/GetDataObjects';
import MatchScoreChart from '../Charts/MatchScoreChart/MatchScoreChart';

const ShowTotalScores = ({ matchData }) => {
    let data = allScores(matchData);
    return <>
        <h3>Total Individual Score per Match</h3>
        <MatchScoreChart data={data} ylab={"Score"} />
    </>
}

export default ShowTotalScores;