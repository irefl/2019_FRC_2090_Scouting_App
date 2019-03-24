import React from 'react';
import {
    Input, InputGroup
} from 'reactstrap';
import { toast } from 'react-toastify';


const CargoAndHatchesDropped = ({ value, setValue }) => {
    return <InputGroup>
        <Input value={value === -1 ? "" : value} placeholder="Number" type="number" onChange={(e) => {
            let newNumber = Number(e.target.value)
            if (newNumber < 0) {
                toast.warn("Value must be greater than 0")
            } else {
                setValue(newNumber)
            }
        }} />
    </InputGroup>
}

export default CargoAndHatchesDropped;
