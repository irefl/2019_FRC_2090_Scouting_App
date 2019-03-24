import { countCargo } from "../../Stats/TeamStats/GetDataObjects/GetDataObjects";
// import { } from "../../../Assets/Teams/Teams";

const DataCalculator = (data) => {
    let cargoScores = {};

    console.log(data);

    Object.keys(data).forEach(team => {
        const matchData = data[team] && data[team].match_data ? data[team].match_data : {}
        let matchCount = Object.keys(matchData).length;
        let cargoTotal = 0;
        Object.keys(matchData).forEach(matchKey => {
            let match = matchData[matchKey]
            cargoTotal += countCargo(match.nearRocket) + countCargo(match.farRocket) + countCargo(match.cargo);
        });
        if (matchCount > 0) {
            cargoScores[team] = cargoTotal / matchCount;
        }
    });



    return { cargoScores }
}



export default DataCalculator;