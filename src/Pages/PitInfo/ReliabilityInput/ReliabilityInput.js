import React from 'react';
import {
    Input, InputGroup, InputGroupAddon, InputGroupText
} from 'reactstrap';
import { toast } from 'react-toastify';


const ReliabilityInput = ({ value, setValue, name, placeholder, max }) => {
    return <InputGroup>
        <InputGroupAddon addonType="prepend">
            <InputGroupText>{name}</InputGroupText>
        </InputGroupAddon>
        <Input value={value !== 0 ? value : ""} placeholder={placeholder} 
                type="number" onChange={(e) => {
            let newNumber = Number(e.target.value)
            if (newNumber > max || newNumber < 0) {
                toast.warn(`Match number must be between 0 and ${max + 1}`)
            } else {
                setValue(newNumber)
            }
        }} />
    </InputGroup>
}

export default ReliabilityInput;
