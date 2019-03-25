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

    Object.keys(data).forEach(team => {
        const matchData = data[team] && data[team].match_data ? data[team].match_data : {}
        let matchCount = Object.keys(matchData).length;
        let cargoTotal = 0;
        let hatchTotal = 0;
        let overallTotal = 0;
        let autonTotal = 0;
        Object.keys(matchData).forEach(matchKey => {
            let match = matchData[matchKey]
            cargoTotal += countCargo(match.nearRocket) + countCargo(match.farRocket) + countCargo(match.cargo);
            hatchTotal += countHatches(match.nearRocket) + countHatches(match.farRocket) + countHatches(match.cargo);
            overallTotal += countBoth(match.nearRocket) + countBoth(match.farRocket) + countBoth(match.cargo);
            autonTotal += calculateAutonLevel(match.selectedAuton)
        });

        if (matchCount > 0) {
            cargoScores[team] = cargoTotal / matchCount;
            hatchScores[team] = hatchTotal / matchCount;
            overallScores[team] = overallTotal / matchCount;
            autonScores[team] = autonTotal / matchCount;
        }
    });

    return { cargoScores, hatchScores, overallScores, autonScores };
}



export default DataCalculator;