import React, { useState } from 'react';
import ScoringConfigurations from '../../../Components/Constants/ScoringConfigurations';
import { None, Cargo, Hatch, CargoAndHatch } from './Icons/Icons';

const { NONE, CARGO, CARGO_AND_HATCH, HATCH } = ScoringConfigurations;

const setCell = (rocket, setRocket, cellName) => {
    let newRocket = { ...rocket };
    const currCell = rocket[cellName];
    switch (currCell) {
        case NONE:
            newRocket[cellName] = CARGO;
            break;
        case CARGO:
            newRocket[cellName] = HATCH;
            break;
        case HATCH:
            newRocket[cellName] = CARGO_AND_HATCH;
            break;
        case CARGO_AND_HATCH:
            newRocket[cellName] = NONE;
            break;
        default:
            newRocket[cellName] = NONE;
            break;
    }
    setRocket(newRocket);
}

const CargoCell = ({ name, value, rocket, setRocket }) => {
    console.log(rocket);
    return <>
        <div style={{
            width: 51,
            height: 51,
            border: "1px solid black",
            display: "inline-block",
            cursor: "pointer",
            userSelect: "none"
        }} onClick={() => {
            setCell(rocket, setRocket, name);
        }} >
            {value === NONE &&
                <None />}

            {value === HATCH &&
                <Hatch />}

            {value === CARGO_AND_HATCH &&
                <CargoAndHatch />}

            {value === CARGO &&
                <Cargo />}
        </div>
    </>
}

export default CargoCell;