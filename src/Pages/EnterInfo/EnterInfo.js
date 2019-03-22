import React, { useState } from 'react';

import BlueButton from '../../Components/BlueButton';
import { Link } from 'react-router-dom';
import TeamPicker from './TeamPicker/TeamPicker';
import MatchNumberInput from './MatchNumberInput/MatchNumberInput';
import AutonPointsPicker from './AutonPointsPicker/AutonPointsPicker';
import ScoringConfigurations from '../../Components/Constants/ScoringConfigurations';
import Rocket from './Rocket/Rocket';
import SidePicker from './SidePicker/SidePicker';
import { Grid, Row, Col } from 'react-flexbox-grid';
import CargoShip from './CargoShip/CargoShip';
import HabPlatformsImage from '../../Assets/Images/HabPlatforms.png';

const Spacer = ({ space }) => {
    const marginTop = space || 0
    return <div style={{ marginTop }}></div>
}

const { NONE } = ScoringConfigurations;

const EnterInfo = () => {
    const [selectedTeam, setSelectedTeam] = useState(0);
    const [matchNumber, setMatchNumber] = useState(0);
    const [side, setSide] = useState("");
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
    });
    const [cargo, setCargo] = useState({
        bay1: NONE,
        bay2: NONE,
        bay3: NONE,
        bay4: NONE,
        bay5: NONE,
        bay6: NONE,
        bay7: NONE,
        bay8: NONE,
    })
    return <>
        <h1>Enter match information</h1>

        <h2>General info</h2>
        {/** Team picker */}
        <TeamPicker {...{ selectedTeam, setSelectedTeam }} />
        <Spacer space={10} />
        <SidePicker {...{ side, setSide }} />
        <Spacer space={10} />
        {/** Match number */}
        <MatchNumberInput {...{ matchNumber, setMatchNumber }} />
        <Spacer space={10} />
        <img src={HabPlatformsImage} alt={"Platform reference"} style={{ width: 150, border: "3px solid #20508b", borderRadius: 10 }} />
        <h2>Autonomous</h2>
        <AutonPointsPicker {...{ selectedAuton, setSelectedAuton }} />

        <Spacer space={10} />
        <h2>Match</h2>

        <Grid>
            <Row>
                <Col md={6}>
                    <h3>Near Rocket</h3>
                    <Rocket rocket={nearRocket} setRocket={setNearRocket} />

                    <h3>Far Rocket</h3>
                    <Rocket rocket={farRocket} setRocket={setFarRocket} />
                </Col>
                <Col md={6}>
                    <h3>Cargo Ship</h3>
                    <CargoShip {...{ rocket: cargo, setRocket: setCargo, side }} />
                </Col>
            </Row>
        </Grid>
        <hr />
        <Link to="/"><BlueButton>Back</BlueButton></Link>
    </>
}

export default EnterInfo;