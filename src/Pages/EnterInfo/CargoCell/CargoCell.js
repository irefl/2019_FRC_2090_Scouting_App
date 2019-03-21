import React, { useState } from 'react';
import ScoringConfigurations from '../../../Components/Constants/ScoringConfigurations';


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

const CargoCell = ({ name, value, setCell, rocket, setRocket }) => {
    return <>

    </>
}