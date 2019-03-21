import React, { useState } from 'react';
import {
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
    Input, InputGroup, InputGroupAddon, InputGroupText
} from 'reactstrap';
import { Teams, TeamsMapping } from '../../Assets/Teams/Teams';
import BlueButton from '../../Components/BlueButton';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Spacer = ({ space }) => {
    const marginTop = space || 0
    return <div style={{ marginTop }}></div>
}

const EnterInfo = () => {
    const [dropOpen, setDropOpen] = useState(false);
    const [selectedTeam, setSelectedTeam] = useState(0);
    const [matchNumber, setMatchNumber] = useState(0);

    return <>
        <h1>Enter team information</h1>

        {/** Team picker */}
        <Dropdown isOpen={dropOpen} toggle={() => setDropOpen(!dropOpen)} >
            <DropdownToggle caret style={{ backgroundColor: "#20508b" }}>
                {selectedTeam !== 0 ? <>{selectedTeam} - {TeamsMapping[selectedTeam]}</> : <>Choose a team</>}
            </DropdownToggle>
            <DropdownMenu modifiers={{
                setMaxHeight: {
                    enabled: true,
                    order: 890,
                    fn: (data) => {
                        return {
                            ...data,
                            styles: {
                                ...data.styles,
                                overflow: 'auto',
                                maxHeight: window.innerHeight * .8,
                            },
                        };
                    },
                },
            }}>
                {Teams.map(team => {
                    return <DropdownItem key={team} onClick={() => { setSelectedTeam(team) }}>{team} - {TeamsMapping[team]}</DropdownItem>
                })}
            </DropdownMenu>
        </Dropdown>

        <Spacer space={10} />

        {/** Match number */}
        <InputGroup>
            <InputGroupAddon addonType="prepend">
                <InputGroupText>Match Number</InputGroupText>
            </InputGroupAddon>
            <Input value={matchNumber !== 0 ? matchNumber : ""} placeholder="Number" type="number" onChange={(e) => {
                let newNumber = Number(e.target.value)
                console.log(newNumber);
                if (newNumber > 100 || newNumber < 0) {
                    toast.warn("Match number must be between 0 and 100")
                } else {
                    setMatchNumber(newNumber)
                }
            }} />
        </InputGroup>
        <hr />
        <Link to="/"><BlueButton>Back</BlueButton></Link>
    </>
}

export default EnterInfo;