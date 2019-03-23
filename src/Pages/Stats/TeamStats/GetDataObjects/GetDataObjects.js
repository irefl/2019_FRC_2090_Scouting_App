import ScoringConfigurations from "../../../../Components/Constants/ScoringConfigurations";

const nearRocket = (matches) => {
    return matches.map((match, i) => {
        return {
            match: i + 1,
            score: countBoth(match.nearRocket)
        }
    });
}


const farRocket = (matches) => {
    return matches.map((match, i) => {
        return {
            match: i + 1,
            score: countBoth(match.farRocket)
        }
    });
}

const cargo = (matches) => {
    return matches.map((match, i) => {
        return {
            match: i + 1,
            score: countBoth(match.cargo)
        }
    });
}

/**
 * Returns matches as {match: ##, score: ##} for hatches
 * @param {Object} matches 
 */
const hatchScores = (matches) => {
    return matches.map((match, i) => {
        return {
            match: i + 1,
            score: countHatches(match.cargo) + countHatches(match.farRocket) + countHatches(match.nearRocket)
        };
    })
}

const countBoth = (rocket) => {
    let score = 0;
    Object.keys(rocket).forEach(panel => {
        if (rocket[panel] === ScoringConfigurations.HATCH || rocket[panel] === ScoringConfigurations.CARGO_AND_HATCH ||
            rocket[panel] === ScoringConfigurations.CARGO) {
            score++;
        }
    });
    return score;
}

/**
 * Count the hatches per rocket or cargo ship
 * @param {Object} rocket 
 */
const countHatches = (rocket) => {
    let score = 0;
    Object.keys(rocket).forEach(panel => {
        if (rocket[panel] === ScoringConfigurations.HATCH || rocket[panel] === ScoringConfigurations.CARGO_AND_HATCH) {
            score++;
        }
    });
    return score;
}

const cargoScores = (matches) => {
    return matches.map((match, i) => {
        return {
            match: i + 1,
            score: countCargo(match.cargo) + countCargo(match.farRocket) + countCargo(match.nearRocket)
        }
    })
}

const countCargo = (rocket) => {
    let score = 0;
    Object.keys(rocket).forEach(panel => {
        if (rocket[panel] === ScoringConfigurations.CARGO || rocket[panel] === ScoringConfigurations.CARGO_AND_HATCH) {
            score++;
        }
    });
    return score;
}

const allScores = (matches) => {
    return matches.map((match, i) => {
        return {
            match: i + 1,
            score: match.score
        }
    })
}

export { cargo, nearRocket, farRocket, hatchScores, countHatches, cargoScores, countCargo, allScores }