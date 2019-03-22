import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import HabLevels from '../../../Components/Constants/HabLevels';

const { NONE, LEVEL_1, LEVEL_2, LEVEL_3 } = HabLevels;

const Levels = [
    { value: NONE, name: "None" },
    { value: LEVEL_1, name: "Level 1" },
    { value: LEVEL_2, name: "Level 2" },
    { value: LEVEL_3, name: "Level 3" }
]

const LevelsMapping = {
    [NONE]: "None",
    [LEVEL_1]: "Level 1",
    [LEVEL_2]: "Level 2",
    [LEVEL_3]: "Level 3"
}

const HabLevelPicker = ({ habBonus, setHabBonus }) => {
    const [dropOpen, setDropOpen] = useState(false);

    return <Dropdown isOpen={dropOpen} toggle={() => setDropOpen(!dropOpen)} >
        <DropdownToggle caret style={{ backgroundColor: "#20508b" }}>
            {habBonus !== "" ? <>{LevelsMapping[habBonus]}</> : <>Select a parking bonus</>}
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
            {Levels.map(level => {
                const { value, name } = level;
                return <DropdownItem key={value} onClick={() => { setHabBonus(value) }}>{name}</DropdownItem>
            })}
        </DropdownMenu>
    </Dropdown>
}

export default HabLevelPicker;