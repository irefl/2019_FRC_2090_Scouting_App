import React from 'react';
import CargoCell from '../CargoCell/CargoCell';

const CargoShip = ({ rocket, setRocket, side }) => {
    return <>
        <h2>Cargo ship ({side === "" ? "LEFT" : side})</h2>
        <div>
            {(side === "LEFT" || side === "") &&
                <div style={{ marginRight: 5, fontSize: '1.5em', display: "inline-block", width: 57 }}>Nose</div>
            }
            <CargoCell {...{ rocket, setRocket, name: "bay1", value: rocket["bay1"] }} />
            <CargoCell {...{ rocket, setRocket, name: "bay2", value: rocket["bay2"] }} />
            <CargoCell {...{ rocket, setRocket, name: "bay3", value: rocket["bay3"] }} />
            <CargoCell {...{ rocket, setRocket, name: "bay4", value: rocket["bay4"] }} />
            {(side === "RIGHT") &&
                <div style={{ marginRight: 5, fontSize: '1.5em', display: "inline-block", width: 57 }}>Nose</div>
            }
        </div>
        <div>
            {(side === "LEFT" || side === "") &&
                <div style={{ marginRight: 5, fontSize: '1.5em', display: "inline-block", width: 57 }}>Nose</div>
            }
            <CargoCell {...{ rocket, setRocket, name: "bay5", value: rocket["bay5"] }} />
            <CargoCell {...{ rocket, setRocket, name: "bay6", value: rocket["bay6"] }} />
            <CargoCell {...{ rocket, setRocket, name: "bay7", value: rocket["bay7"] }} />
            <CargoCell {...{ rocket, setRocket, name: "bay8", value: rocket["bay8"] }} />
            {(side === "RIGHT") &&
                <div style={{ marginRight: 5, fontSize: '1.5em', display: "inline-block", width: 57 }}>Nose</div>
            }
        </div>

    </>
}

export default CargoShip;