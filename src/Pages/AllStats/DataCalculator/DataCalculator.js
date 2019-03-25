import {
    countCargo,
    countHatches,
    countBoth,
    calculateAutonLevel
} from "../../Stats/TeamStats/GetDataObjects/GetDataObjects";
// import { } from "../../../Assets/Teams/Teams";

const DataCalculator = (data) => {
    let cargoScores = {};
    let hatchScores = {};
    let overallScores = {};
    let autonScores = {};
    let rocketOverallScores = {};
    let cargoShipOverallScores = {};
    let cargoDropCounts = {};
    let hatchDropCounts = {};

    Object.keys(data).forEach(team => {
        const matchData = data[team] && data[team].match_data ? data[team].match_data : {}
        let matchCount = Object.keys(matchData).length;
        let cargoTotal = 0;
        let hatchTotal = 0;
        let overallTotal = 0;
        let autonTotal = 0;
        let rocketTotal = 0;
        let cargoShipTotal = 0;
        let cargoDropCount = 0;
        let hatchDropCount = 0;
        Object.keys(matchData).forEach(matchKey => {
            let match = matchData[matchKey]

            let countBothNearRocket = countBoth(match.nearRocket);
            let countBothFarRocket = countBoth(match.farRocket);
            let countBothCargoShip = countBoth(match.cargo)

            cargoTotal += countCargo(match.nearRocket) + countCargo(match.farRocket) + countCargo(match.cargo);
            hatchTotal += countHatches(match.nearRocket) + countHatches(match.farRocket) + countHatches(match.cargo);
            overallTotal += countBothNearRocket + countBothFarRocket + countBothCargoShip;
            autonTotal += calculateAutonLevel(match.selectedAuton)
            rocketTotal += countBothNearRocket + countBothFarRocket;
            cargoShipTotal += countBothCargoShip;
            cargoDropCount += match.cargoDropped;
            hatchDropCount += match.hatchesDropped;
        });

        if (matchCount > 0) {
            cargoScores[team] = cargoTotal / matchCount;
            hatchScores[team] = hatchTotal / matchCount;
            overallScores[team] = overallTotal / matchCount;
            autonScores[team] = autonTotal / matchCount;
            rocketOverallScores[team] = rocketTotal / matchCount;
            cargoShipOverallScores[team] = cargoShipTotal / matchCount;
            cargoDropCounts[team] = cargoDropCount / matchCount;
            hatchDropCounts[team] = hatchDropCount / matchCount;
        }
    });

    return {
        cargoScores,
        hatchScores,
        overallScores,
        autonScores,
        rocketOverallScores,
        cargoShipOverallScores,
        cargoDropCounts,
        hatchDropCounts
    };
}



export default DataCalculator;