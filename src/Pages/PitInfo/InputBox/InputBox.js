import React from 'react';
import {
    Input, InputGroup, InputGroupAddon, InputGroupText
} from 'reactstrap';


const InputBox = ({ value, setValue, name, placeholder }) => {
    return <InputGroup>
        <InputGroupAddon addonType="prepend">
            <InputGroupText>{name}</InputGroupText>
        </InputGroupAddon>
        <Input value={value} placeholder={placeholder} onChange={(e) => {
            setValue(e.target.value);
        }} />
    </InputGroup>
}

export default InputBox;
