import React, { useState } from 'react';

import BlueButton from '../../Components/BlueButton';
import { Link } from 'react-router-dom';
import TeamPicker from './TeamPicker/TeamPicker';
import MatchNumberInput from './MatchNumberInput/MatchNumberInput';
import AutonPointsPicker from './AutonPointsPicker/AutonPointsPicker';
import ScoringConfigurations from '../../Components/Constants/ScoringConfigurations';

const Spacer = ({ space }) => {
    const marginTop = space || 0
    return <div style={{ marginTop }}></div>
}

const { NONE } = ScoringConfigurations;

const EnterInfo = () => {
    const [selectedTeam, setSelectedTeam] = useState(0);
    const [matchNumber, setMatchNumber] = useState(0);
    const [selectedAuton, setSelectedAuton] = useState(-1);
    const [nearRocket, setNearRocket] = useState({
        topLeft: NONE,
        topRight: NONE,
        midLeft: NONE,
        midRight: NONE,
        botLeft: NONE,
        botRight: NONE
    });
    const [farRocket, setFarRocket] = useState({
        topLeft: NONE,
        topRight: NONE,
        midLeft: NONE,
        midRight: NONE,
        botLeft: NONE,
        botRight: NONE
    })
    return <>
        <h1>Enter match information</h1>

        <h2>General info</h2>
        {/** Team picker */}
        <TeamPicker {...{ selectedTeam, setSelectedTeam }} />

        <Spacer space={10} />

        {/** Match number */}
        <MatchNumberInput {...{ matchNumber, setMatchNumber }} />

        <Spacer space={10} />
        <h2>Autonomous</h2>

        <AutonPointsPicker {...{ selectedAuton, setSelectedAuton }} />

        <Spacer space={10} />
        <h2>Match</h2>


        <hr />
        <Link to="/"><BlueButton>Back</BlueButton></Link>
    </>
}

export default EnterInfo;