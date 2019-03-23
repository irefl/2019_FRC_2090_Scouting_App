import { hatchScores, countHatches } from "../GetDataObjects";
import ScoringConfigurations from "../../../../../Components/Constants/ScoringConfigurations";
// import { describe, it, expect } from 'jest';

const { CARGO, CARGO_AND_HATCH, HATCH, NONE } = ScoringConfigurations;

describe('Count hatches counts the correct amount of hatches', () => {
    it("Empty case", () => {
        expect(countHatches({})).toBe(0);
    });
    it("Counts Two Hatches", () => {
        expect(countHatches({ a: HATCH, b: HATCH })).toBe(2);
    });
    it("Counts Cargo and Hatch as one hatch", () => {
        expect(countHatches({ a: CARGO_AND_HATCH })).toBe(1);
    });
    it("Counts Cargo and Hatch with hatches", () => {
        expect(countHatches({ a: HATCH, b: CARGO_AND_HATCH })).toBe(2);
    });
    it("Counts Large object", () => {
        expect(countHatches({ a: HATCH, b: HATCH, c: CARGO_AND_HATCH, d: CARGO, e: HATCH, f: CARGO, g: NONE })).toBe(4);
    });

})