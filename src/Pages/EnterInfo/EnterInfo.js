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
import HabLevelPicker from './HabLevelPicker/HabLevelPicker';
import { Input } from 'reactstrap';
import HabLevels from '../../Components/Constants/HabLevels';
import { TeamsMapping } from '../../Assets/Teams/Teams';

const Spacer = ({ space }) => {
    const marginTop = space || 0
    return <div style={{ marginTop }}></div>
}

const { NONE, CARGO, CARGO_AND_HATCH, HATCH } = ScoringConfigurations;

/**
 * calculateCargo calculates the score from an individual rocket or cargo ship
 * @param {Object} rocket Object with keys that all have values that are enums from ScoringConfigurations
 */
const calculateCargo = (rocket) => {
    let score = 0;
    Object.keys(rocket).forEach(space => {
        let scored = rocket[space];
        switch (scored) {
            case CARGO:
                score += 3;
                break;
            case HATCH:
                score += 2;
                break;
            case CARGO_AND_HATCH:
                score += 5;
                break;
            default:
                score += 0;
                break;
        }
    });
    return score;
}

/**
 * calculateScore calculates the team's score from the provided input.
 */
const calculateScore = ({ selectedAuton, nearRocket, farRocket, cargo, habBonus }) => {
    let score = 0;

    switch (selectedAuton) {
        case 2:
            score += 3;
            break;
        case 3:
            score += 6;
            break;
    }

    score += calculateCargo(nearRocket);
    score += calculateCargo(farRocket);
    score += calculateCargo(cargo);

    switch (habBonus) {
        case HabLevels.LEVEL_1:
            score += 3;
            break;
        case HabLevels.LEVEL_2:
            score += 6;
            break;
        case HabLevels.LEVEL_3:
            score += 12;
            break;
    }

    return score;
}

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
    });
    const [habBonus, setHabBonus] = useState("")
    const [observations, setObservations] = useState("")

    let score = calculateScore({ selectedAuton, nearRocket, farRocket, cargo, habBonus });
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
                    <h3><strong>Far</strong> Rocket</h3>
                    <Rocket rocket={farRocket} setRocket={setFarRocket} />

                    <h3><strong>Near</strong> Rocket</h3>
                    <Rocket rocket={nearRocket} setRocket={setNearRocket} />
                </Col>
                <Col md={6}>
                    <h3>Cargo Ship</h3>
                    <CargoShip {...{ rocket: cargo, setRocket: setCargo, side }} />
                </Col>
            </Row>
        </Grid>

        <Spacer space={20} />

        <h3>Habitat Parking Bonus</h3>
        <HabLevelPicker {...{ habBonus, setHabBonus }} />
        <Spacer space={10} />
        <h2>Notes and observations (optional)</h2>
        <Input type="textarea" value={observations} onChange={(e) => {
            setObservations(e.target.value);
        }} />

        <Spacer space={10} />
        <h2>Review and submit</h2>
        {selectedTeam !== 0 && <p style={{ fontSize: 30, fontWeight: 'bold' }}>Team {selectedTeam} - {TeamsMapping[selectedTeam]} has scored <span style={{ color: "#990000" }}>{score}</span> points</p>}
        {selectedTeam === 0 && <p>Please select a team</p>}
        <hr />
        <Link to="/"><BlueButton>Back</BlueButton></Link>
    </>
}

export default EnterInfo;