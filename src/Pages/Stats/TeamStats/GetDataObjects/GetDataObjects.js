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

const farBays = ["bay1", "bay2", "bay3", "bay4"];
const nearBays = ["bay5", "bay6", "bay7", "bay8"];

const cargocomfortScores = (matches) => {
    let nearLeft = [];
    let farLeft = [];
    let nearRight = [];
    let farRight = [];

    matches.forEach((match, i) => {
        if (match.side === "LEFT") {
            farLeft.push({
                match: i + 1,
                score: getScoreOfCertainCargoSpots(match.cargo, farBays)
            });
            nearLeft.push({
                match: i + 1,
                score: getScoreOfCertainCargoSpots(match.cargo, nearBays)
            });
        }

        if (match.side === "RIGHT") {
            farRight.push({
                match: i + 1,
                score: getScoreOfCertainCargoSpots(match.cargo, farBays)
            });
            nearRight.push({
                match: i + 1,
                score: getScoreOfCertainCargoSpots(match.cargo, nearBays)
            });
        }
    })

    return {
        nearLeft,
        farLeft,
        nearRight,
        farRight
    }
}

// bays is an array of strings in the format "bay#"
const getScoreOfCertainCargoSpots = (cargo, bays) => {
    let score = 0;
    bays.forEach(bay => {
        let scored = cargo[bay];
        switch (scored) {
            case ScoringConfigurations.CARGO:
                score += 3;
                break;
            case ScoringConfigurations.HATCH:
                score += 2;
                break;
            case ScoringConfigurations.CARGO_AND_HATCH:
                score += 5;
                break;
            default:
                score += 0;
                break;
        }
    });
    return score;
}

const calculateClimb = (matches) => {
    return matches.map((match, i) => {
        return {
            match: i + 1,
            score: match.habBonus
        }
    });
}

const calculateAuto = (matches) => {
    return matches.map((match, i) => {
        return {
            match: i + 1,
            score: calculateAutonLevel(match.selectedAuton)
        }
    })
}

const calculateAutonLevel = (value) => {
    switch (value) {
        case 2:
            return 1;
        case 3:
            return 2;
        default:
            return 0;
    }
}

export {
    calculateAuto,
    calculateClimb,
    cargocomfortScores,
    cargo,
    nearRocket,
    farRocket,
    hatchScores,
    countHatches,
    cargoScores,
    countCargo,
    allScores
}