import React from 'react';
import CargoCell from '../CargoCell/CargoCell';

const Rocket = ({ rocket, setRocket }) => {
    return <>
        <div>
            <div style={{ marginRight: 5, fontSize: '1.5em', display: "inline-block", width: 150 }}>Top level </div>
            <CargoCell {...{ rocket, setRocket, name: "topLeft", value: rocket["topLeft"] }} />
            <CargoCell {...{ rocket, setRocket, name: "topRight", value: rocket["topRight"] }} />
        </div>
        <div>
            <div style={{ marginRight: 5, fontSize: '1.5em', display: "inline-block", width: 150 }}>Mid level </div>
            <CargoCell {...{ rocket, setRocket, name: "midLeft", value: rocket["midLeft"] }} />
            <CargoCell {...{ rocket, setRocket, name: "midRight", value: rocket["midRight"] }} />
        </div>
        <div>
            <div style={{ marginRight: 5, fontSize: '1.5em', display: "inline-block", width: 150 }}>Bot level </div>
            <CargoCell {...{ rocket, setRocket, name: "botLeft", value: rocket["botLeft"] }} />
            <CargoCell {...{ rocket, setRocket, name: "botRight", value: rocket["botRight"] }} />
        </div>


    </>
}

export default Rocket;