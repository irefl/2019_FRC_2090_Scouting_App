import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Teams from '../../Assets/Teams/Teams';

const EnterInfo = () => {
    const [dropOpen, setDropOpen] = useState(false)

    // const
    return <>
        <Dropdown isOpen={dropOpen} toggle={() => setDropOpen(!dropOpen)}>
            <DropdownToggle caret>
                Choose a team
            </DropdownToggle>
            <DropdownMenu>
                {Teams}
            </DropdownMenu>
        </Dropdown>
    </>
}

export default EnterInfo;