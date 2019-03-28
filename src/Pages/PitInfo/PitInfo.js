import React, {useState} from 'react';
import BlueButton from '../../Components/BlueButton';
import {Link} from 'react-router-dom';
import TeamPicker from '../../Components/TeamPicker/TeamPicker';
import { INIT_CIRCLED, INIT_CLIMB_CIRCLED } from './PitInfoConsts/PitInfoConsts';
import Spacer from '../../Components/Spacer';
import InputBox from './InputBox/InputBox';
import ReliabilityInput from './ReliabilityInput/ReliabilityInput';

const PitInfo = () => {
    const [selectedTeam, setSelectedTeam] = useState(0);
    const [driveType, setDriveTypeText] = useState("");
    const [reliability, setReliability] = useState(0); // 1-10
    const [maxStartingPos, setMaxStartingPos] = useState(0); // 0, 1, or 2 (None, Level 1, Level 2)
    const [preGamePreference, setPreGamePreference] = useState(""); // Auto or camera
    const [mainScoringMethod, setMainScoringMethod] = useState(""); // Cargo or hatch or both
    const [hatchCircled, setHatchCircled] = useState(INIT_CIRCLED);
    const [cargoCircled, setCargoCircled] = useState(INIT_CIRCLED);
    const [climbCircled, setClimbCircled] = useState(INIT_CLIMB_CIRCLED);
    const [timeToClimb, setTimeToClimb] = useState("");
    const [climbReliability, setClimbReliability] = useState(0); // 1-10
    const [scoringStrats, setScoringStrats] = useState("");
    const [notes, setNotes] = useState("");

    return <>
        <Link to="/"><BlueButton>Back</BlueButton></Link>
        <hr />
        <h1>Enter pit scouting information</h1>

        <TeamPicker {...{selectedTeam, setSelectedTeam}} />
        <Spacer space={10} />

        <h2>Drive Type</h2>
        <InputBox {...{
            value: driveType, 
            setValue: setDriveTypeText, 
            name: "Drive Type",
            placeholder: "eg. Mechanum, West Coast, Swerve..."}}/>
        <Spacer space={5} />
        <h2>Reliability</h2> 
        <ReliabilityInput {...{
            value: reliability,
            setValue: setReliability,
            name: "Reliability",
            placeholder: "0-10",
            max: 10
        }}/>
        <Spacer space={5} />
        <h2>Max starting position</h2>
        <h3>0 for none, 1 for H1, 2 for H2</h3>
        <ReliabilityInput {...{
            value: maxStartingPos,
            setValue: setMaxStartingPos,
            name: "Max starting pos",
            placeholder: "enter 0, 1, or 2",
            max: 2
        }}/>

        <hr />
        <Link to="/"><BlueButton>Back</BlueButton></Link>
    </>
}

export default PitInfo;