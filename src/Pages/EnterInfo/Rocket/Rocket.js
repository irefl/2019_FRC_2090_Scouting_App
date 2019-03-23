import React from 'react';
import CargoCell from '../CargoCell/CargoCell';

const Rocket = ({ rocket, setRocket, cantChange }) => {
    return <>
        <div>
            <div style={{ marginRight: 5, fontSize: '1.5em', display: "inline-block", width: 150 }}>Top level </div>
            <CargoCell {...{ rocket, setRocket, name: "topLeft", value: rocket["topLeft"], cantChange }} />
            <CargoCell {...{ rocket, setRocket, name: "topRight", value: rocket["topRight"], cantChange }} />
        </div>
        <div>
            <div style={{ marginRight: 5, fontSize: '1.5em', display: "inline-block", width: 150 }}>Mid level </div>
            <CargoCell {...{ rocket, setRocket, name: "midLeft", value: rocket["midLeft"], cantChange }} />
            <CargoCell {...{ rocket, setRocket, name: "midRight", value: rocket["midRight"], cantChange }} />
        </div>
        <div>
            <div style={{ marginRight: 5, fontSize: '1.5em', display: "inline-block", width: 150 }}>Bot level </div>
            <CargoCell {...{ rocket, setRocket, name: "botLeft", value: rocket["botLeft"], cantChange }} />
            <CargoCell {...{ rocket, setRocket, name: "botRight", value: rocket["botRight"], cantChange }} />
        </div>


    </>
}

export default Rocket;