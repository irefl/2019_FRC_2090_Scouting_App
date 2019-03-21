import React, { useState } from 'react';
import {
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from 'reactstrap';
import { Teams, TeamsMapping } from '../../../Assets/Teams/Teams';

const TeamPicker = ({ selectedTeam, setSelectedTeam }) => {
    const [dropOpen, setDropOpen] = useState(false);

    return <Dropdown isOpen={dropOpen} toggle={() => setDropOpen(!dropOpen)} >
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
}

export default TeamPicker;