import React from 'react';

const None = () => {
    return <svg height="50" width="50">
    </svg>
}

const Cargo = () => {
    return <svg height="50" width="50">
        <circle cx="25" cy="25" r="15" stroke="#f4d941" strokeWidth="0" fill="#ffa500" />
    </svg>
}

const Hatch = () => {
    return <svg height="50" width="50">
        <circle cx="25" cy="25" r="15" stroke="#f4d941" strokeWidth="10" fill="#eeeeee" />
    </svg>
}

const CargoAndHatch = () => {
    return <svg height="50" width="50">
        <circle cx="25" cy="25" r="15" stroke="#f4d941" strokeWidth="10" fill="#ffa500" />
    </svg>
}

export { None, Cargo, Hatch, CargoAndHatch };