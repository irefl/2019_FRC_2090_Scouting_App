import React from 'react';
import { calculateAuto } from '../GetDataObjects/GetDataObjects';
import MatchScoreChart from '../Charts/MatchScoreChart/MatchScoreChart';

const AutoPerformance = ({ matchData }) => {
    let data = calculateAuto(matchData);
    return <>
        <h3>Auto performance (0 can mean none or fail)</h3>
        <MatchScoreChart data={data} ylab={"Level"} />
    </>
}

export default AutoPerformance;