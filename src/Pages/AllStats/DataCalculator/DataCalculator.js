import { countHatches } from "../../Stats/TeamStats/GetDataObjects/GetDataObjects";
import { TeamsInit } from "../../../Assets/Teams/Teams";

const DataCalculator = (data) => {
    let cargoScores = [];

    Object.keys(data).forEach(team => {
        const matchData = data[team] && data[team].match_data ? data[team].match_data : {}
        Object.keys(matchData).forEach(matchKey => {
            let match = matchData[matchKey]

            cargoScores.push({
                name: team,
                count: countHatches(match.nearRocket) + countHatches(match.farRocket) + countHatches(match.cargo)
            });
        })
    });



    return { cargoScores }
}



export default DataCalculator;