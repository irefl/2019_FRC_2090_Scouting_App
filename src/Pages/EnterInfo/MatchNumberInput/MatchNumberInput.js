import React from 'react';
import {
    Input, InputGroup, InputGroupAddon, InputGroupText
} from 'reactstrap';
import { toast } from 'react-toastify';


const MatchNumberInput = ({ matchNumber, setMatchNumber }) => {
    return <InputGroup>
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
}

export default MatchNumberInput;
