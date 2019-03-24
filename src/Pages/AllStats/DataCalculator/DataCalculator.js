import { countCargo, countHatches } from "../../Stats/TeamStats/GetDataObjects/GetDataObjects";
// import { } from "../../../Assets/Teams/Teams";

const DataCalculator = (data) => {
    let cargoScores = {};
    let hatchScores = {};

    Object.keys(data).forEach(team => {
        const matchData = data[team] && data[team].match_data ? data[team].match_data : {}
        let matchCount = Object.keys(matchData).length;
        let cargoTotal = 0;
        let hatchTotal = 0;

        Object.keys(matchData).forEach(matchKey => {
            let match = matchData[matchKey]
            cargoTotal += countCargo(match.nearRocket) + countCargo(match.farRocket) + countCargo(match.cargo);
            hatchTotal += countHatches(match.nearRocket) + countHatches(match.farRocket) + countHatches(match.cargo);
        });
        if (matchCount > 0) {
            cargoScores[team] = cargoTotal / matchCount;
            hatchScores[team] = hatchTotal / matchCount;
        }
    });



    return { cargoScores, hatchScores };
}



export default DataCalculator;