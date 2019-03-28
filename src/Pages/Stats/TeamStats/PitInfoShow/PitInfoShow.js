import React from 'react';

const PitInfoShow = ({pitinfo}) => {
    // console.log(pitinfo);
//     cargoCircled: {Cargo: false, L1: true, L2: true, L3: true, None: false}
// climbReliability: 0
// driveType: "Mechanum"
// hatchCircled: {Cargo: false, L1: true, L2: true, L3: true, None: false}
// mainScoringMethod: 3
// maxStartingPos: 1
// notes: "Wheels with stuff, not chains though (william note: Track?)"
// preGamePreference: 2
// reliability: 0
// scoringStrats: ""
// timeToClimb: "Depends, quick"
    let maxStart = "None";
    switch (pitinfo.maxStartingPos) {
        case 1: 
            maxStart = "H1";
            break;
        case 2:
            maxStart = "H2";
            break;
        default:
            maxStart = "None";
            break;
    }

    let autoOrCamera = "None";
    switch (pitinfo.preGamePreference) {
        case 1:
            autoOrCamera = "Auto";
            break;
        case 2:
            autoOrCamera = "Camera";
            break;
        default:
            autoOrCamera = "None";
            break;
    }

    let mainScoringMethod = "None";
    switch(pitinfo.mainScoringMethod) {
        case 1:
            mainScoringMethod = "Hatch";
            break;
        case 2:
            mainScoringMethod = "Cargo";
            break;
        case 3:
            mainScoringMethod = "Climb";
            break;
        case 4:
            mainScoringMethod = "Cargo and Hatch";
            break;
        case 5:
            mainScoringMethod = "Cargo, Hatch, and Climb";
            break;
        default:
            mainScoringMethod = "None";
            break;
    }

    let hatchCircled = Object.keys(pitinfo.hatchCircled).reduce((acc, curr) => {
        if(pitinfo.hatchCircled[curr]) {
            acc.push(curr);
        }
        return acc;
    },[]).join(", ");

    let cargoCircled = Object.keys(pitinfo.cargoCircled).reduce((acc, curr) => {
        if(pitinfo.cargoCircled[curr]) {
            acc.push(curr);
        }
        return acc;
    },[]).join(", ");

    let climbCircled = Object.keys(pitinfo.climbCircled).reduce((acc, curr) => {
        if(pitinfo.climbCircled[curr]) {
            acc.push(curr);
        }
        return acc;
    },[]).join(", ");

    return <>
        <div>
            <div style={{
                fontWeight: "bold", 
                color: "#20508B",
                fontSize: 20}}>Drive type:</div>
                {pitinfo.driveType}
        </div>
        <div>
            <div style={{
                fontWeight: "bold", 
                color: "#20508B",
                fontSize: 20}}>Robot reliability (low = 1, high = 10, unrated = 0):</div>
                {pitinfo.reliability} 
        </div>
        <div>
            <div style={{
                fontWeight: "bold", 
                color: "#20508B",
                fontSize: 20}}>Max starting position:</div>
                {maxStart} 
        </div>
        <div>
            <div style={{
                fontWeight: "bold", 
                color: "#20508B",
                fontSize: 20}}>Pre-Game:</div>
                {autoOrCamera} 
        </div>
        <div>
            <div style={{
                fontWeight: "bold", 
                color: "#20508B",
                fontSize: 20}}>Main scoring method:</div>
                {mainScoringMethod} 
        </div>
        <div>
            <div style={{
                fontWeight: "bold", 
                color: "#20508B",
                fontSize: 20}}>Hatch:</div>
                {hatchCircled} 
        </div>

        <div>
            <div style={{
                fontWeight: "bold", 
                color: "#20508B",
                fontSize: 20}}>Cargo:</div>
                {cargoCircled} 
        </div>

        <div>
            <div style={{
                fontWeight: "bold", 
                color: "#20508B",
                fontSize: 20}}>Climb:</div>
                {climbCircled} 
        </div>

        <div>
            <div style={{
                fontWeight: "bold", 
                color: "#20508B",
                fontSize: 20}}>Time to climb:</div>
                {pitinfo.timeToClimb} 
        </div>

        <div>
            <div style={{
                fontWeight: "bold", 
                color: "#20508B",
                fontSize: 20}}>Climb reliability (low = 1, high = 10, unrated = 0):</div>
                {pitinfo.climbReliability} 
        </div>

        <div>
            <div style={{
                fontWeight: "bold", 
                color: "#20508B",
                fontSize: 20}}>Scoring strategies:</div>
                {pitinfo.scoringStrats} 
        </div>

        <div>
            <div style={{
                fontWeight: "bold", 
                color: "#20508B",
                fontSize: 20}}>Notes:</div>
                {pitinfo.notes} 
        </div>
    </>

}

export default PitInfoShow;