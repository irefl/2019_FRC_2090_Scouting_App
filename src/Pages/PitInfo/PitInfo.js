import React, {useState} from 'react';
import BlueButton from '../../Components/BlueButton';
import {Link} from 'react-router-dom';
import {Input, Label} from 'reactstrap';
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
    const [preGamePreference, setPreGamePreference] = useState(0); // Auto or camera
    const [mainScoringMethod, setMainScoringMethod] = useState(0); // Cargo or hatch or both
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
            placeholder: "1-10",
            max: 10
        }}/>
        <Spacer space={5} />
        <h2>Max starting position</h2>
        <h3>0 for none, 1 for H1, 2 for H2</h3>
        <ReliabilityInput {...{
            value: maxStartingPos,
            setValue: setMaxStartingPos,
            name: "Max starting pos",
            placeholder: "leave blank or enter 1, or 2",
            max: 2
        }}/>
        <Spacer space={5} />
        <h2>Pre-Game</h2>
        <h3>0 for None, 1 for Auto, 2 for Camera</h3>
        <ReliabilityInput {...{
            value: preGamePreference,
            setValue: setPreGamePreference,
            name: "Pregame",
            placeholder: "leave blank or enter 1, or 2",
            max: 2
        }}/>
        <h2>Main scoring method</h2>
        <h3>0 for none, 1 for Hatch, 2 for Cargo</h3>
        <ReliabilityInput {...{
            value: mainScoringMethod,
            setValue: setMainScoringMethod,
            name: "Main scoring method",
            placeholder: "leave blank or enter 1, or 2",
            max: 2
        }}/>

        <div>
            <h2>Hatch</h2>
            {["L3", "L2", "L1", "Cargo", "None"].map((d,i) => {
                return <div key={"h" + i}><Label check >
                    <Input type="checkbox" 
                        checked={hatchCircled[d]}
                        onChange={() => {
                            setHatchCircled({...hatchCircled, [d]: !hatchCircled[d]});
                        }}
                    />
                    {d}
                </Label></div>
            })}
        </div>

        <div>
            <h2>Cargo</h2>
            {["L3", "L2", "L1", "Cargo", "None"].map((d,i) => {
                return <div key={"h" + i}><Label check >
                    <Input type="checkbox" 
                        checked={cargoCircled[d]}
                        onChange={() => {
                            setCargoCircled({...cargoCircled, [d]: !cargoCircled[d]});
                        }}
                    />
                    {d}
                </Label></div>
            })}
        </div>

        <div>
            <h2>Climb</h2>
            {["L3", "L2", "L1", "None"].map((d,i) => {
                return <div key={"h" + i}><Label check >
                    <Input type="checkbox" 
                        checked={climbCircled[d]}
                        onChange={() => {
                            setClimbCircled({...climbCircled, [d]: !climbCircled[d]});
                        }}
                    />
                    {d}
                </Label></div>
            })}
        </div>
        <Spacer space={10} />
        <InputBox {...{
            value: timeToClimb, 
            setValue: setTimeToClimb, 
            name: "Time to climb",
            placeholder: "eg. 5 seconds, quick"}}/>
        <hr />
        <Link to="/"><BlueButton>Back</BlueButton></Link>
    </>
}

export default PitInfo;