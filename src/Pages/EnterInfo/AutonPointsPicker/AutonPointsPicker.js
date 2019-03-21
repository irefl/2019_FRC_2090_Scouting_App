import React, { useState } from 'react';
import {
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from 'reactstrap';

const Levels = [{
    value: 0,
    name: "No auto"
}, {
    value: 1,
    name: "Attempted to move but didn't cross any lines"
}, {
    value: 2,
    name: "Crossed HAB line from level 1"
}, {
    value: 3,
    name: "Crossed HAB line from level 2"
}, {
    value: 4,
    name: "Huge failure (details in notes)"
}]

const AutonPointsPicker = ({ selectedAuton, setSelectedAuton }) => {
    const [dropOpen, setDropOpen] = useState(false);

    return <Dropdown isOpen={dropOpen} toggle={() => setDropOpen(!dropOpen)} >
        <DropdownToggle caret style={{ backgroundColor: "#20508b" }}>
            {selectedAuton !== -1 ? <>{Levels[selectedAuton].name}</> : <>Select an autonomous</>}
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
                return <DropdownItem key={value} onClick={() => { setSelectedAuton(value) }}>{name}</DropdownItem>
            })}
        </DropdownMenu>
    </Dropdown>
}

export default AutonPointsPicker;