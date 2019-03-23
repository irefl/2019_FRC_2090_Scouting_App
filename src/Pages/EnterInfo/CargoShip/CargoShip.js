import React from 'react';
import CargoCell from '../CargoCell/CargoCell';

const CargoShip = ({ rocket, setRocket, side, cantChange }) => {
    return <>
        <h2>Cargo ship ({side === "" ? "LEFT" : side})</h2>
        <div>
            {(side === "LEFT" || side === "") &&
                <div style={{ marginRight: 5, fontSize: '1.5em', display: "inline-block", width: 57 }}>Nose</div>
            }
            <CargoCell {...{ rocket, setRocket, name: "bay1", value: rocket["bay1"], cantChange }} />
            <CargoCell {...{ rocket, setRocket, name: "bay2", value: rocket["bay2"], cantChange }} />
            <CargoCell {...{ rocket, setRocket, name: "bay3", value: rocket["bay3"], cantChange }} />
            <CargoCell {...{ rocket, setRocket, name: "bay4", value: rocket["bay4"], cantChange }} />
            {(side === "RIGHT") &&
                <div style={{ marginRight: 5, fontSize: '1.5em', display: "inline-block", width: 57 }}>Nose</div>
            }
        </div>
        <div>
            {(side === "LEFT" || side === "") &&
                <div style={{ marginRight: 5, fontSize: '1.5em', display: "inline-block", width: 57 }}>Nose</div>
            }
            <CargoCell {...{ rocket, setRocket, name: "bay5", value: rocket["bay5"], cantChange }} />
            <CargoCell {...{ rocket, setRocket, name: "bay6", value: rocket["bay6"], cantChange }} />
            <CargoCell {...{ rocket, setRocket, name: "bay7", value: rocket["bay7"], cantChange }} />
            <CargoCell {...{ rocket, setRocket, name: "bay8", value: rocket["bay8"], cantChange }} />
            {(side === "RIGHT") &&
                <div style={{ marginRight: 5, fontSize: '1.5em', display: "inline-block", width: 57 }}>Nose</div>
            }
        </div>

    </>
}

export default CargoShip;