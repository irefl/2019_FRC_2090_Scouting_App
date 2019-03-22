import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Levels = [
    { value: "LEFT", name: "LEFT" },
    { value: "RIGHT", name: "RIGHT" }
]

const SidePicker = ({ side, setSide }) => {
    const [dropOpen, setDropOpen] = useState(false);

    return <Dropdown isOpen={dropOpen} toggle={() => setDropOpen(!dropOpen)} >
        <DropdownToggle caret style={{ backgroundColor: "#20508b" }}>
            {side !== "" ? <>{side}</> : <>Select a side</>}
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
                return <DropdownItem key={value} onClick={() => { setSide(value) }}>{name}</DropdownItem>
            })}
        </DropdownMenu>
    </Dropdown>
}

export default SidePicker;