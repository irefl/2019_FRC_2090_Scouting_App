const PickupHatchConstants = {
    NO_INFORMATION_AVAILABLE: "NO_INFORMATION_AVAILABLE",
    CANT_PICKUP: "CANT_PICKUP",
    PICKS_UP_WELL: "PICKS_UP_WELL",
    CAN_PICKUP_BUT_NO_COMFORT: "CAN_PICKUP_BUT_NO_COMFORT",
    CAN_PICKUP_BUT_OFTEN_FAILS: "CAN_PICKUP_BUT_OFTEN_FAILS",
    CAN_PICKUP_BUT_CANNOT_SCORE: "CAN_PICKUP_BUT_CANNOT_SCORE"
};

const PickupHatchConstantsMapping = {
    NO_INFORMATION_AVAILABLE: "There is no hatch pickup information available",
    CANT_PICKUP: "The team cannot pick up hatches off the ground",
    PICKS_UP_WELL: "The team can pick up hatches off the ground well",
    CAN_PICKUP_BUT_NO_COMFORT: "The team can pick up hatches but it prefers not to",
    CAN_PICKUP_BUT_OFTEN_FAILS: "The team can pick up hatches but fails to do so often",
    CAN_PICKUP_BUT_CANNOT_SCORE: "The team can pick up hatches but cannot score them afterwards"
}

export default PickupHatchConstants;

export {PickupHatchConstantsMapping};