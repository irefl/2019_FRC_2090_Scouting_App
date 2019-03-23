import ScoringConfigurations from "../../../../Components/Constants/ScoringConfigurations";

/**
 * Returns matches as {match: ##, score: ##} for hatches
 * @param {Object} matches 
 */
const hatchScores = (matches) => {
    return matches.map(match => {
        return {
            match: match.matchNumber,
            score: countHatches(match.cargo) + countHatches(match.farRocket) + countHatches(match.nearRocket)
        };
    })
}

const countHatches = (rocket) => {
    let score = 0;
    Object.keys(rocket).forEach(panel => {
        if (rocket[panel] === ScoringConfigurations.HATCH || rocket[panel] === ScoringConfigurations.CARGO_AND_HATCH) {
            score++;
        }
    });
    return score;
}


export { hatchScores, countHatches }