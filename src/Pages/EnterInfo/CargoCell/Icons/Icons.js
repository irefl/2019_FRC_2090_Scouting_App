import React from 'react';

const None = () => {
    return <svg height="50" width="50">
    </svg>
}

const Cargo = () => {
    return <svg height="50" width="50">
        <circle cx="25" cy="25" r="20" stroke="yellow" stroke-width="0" fill="orange" />
    </svg>
}

const Hatch = () => {
    return <svg height="50" width="50">
        <circle cx="25" cy="25" r="20" stroke="yellow" stroke-width="4" fill="white" />
    </svg>
}

const CargoAndHatch = () => {
    return <svg height="50" width="50">
        <circle cx="25" cy="25" r="20" stroke="yellow" stroke-width="4" fill="orange" />
    </svg>
}



export { None, Cargo, Hatch, CargoAndHatch };