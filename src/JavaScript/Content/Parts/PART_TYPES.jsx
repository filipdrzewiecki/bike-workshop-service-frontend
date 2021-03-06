//SECTIONS
const GENERAL_SECTION = 'General';
const BOTTOM_BRACKET_SECTION = 'Bottom bracket';
const STEERING_SECTION = 'Steering';
const OTHER_SECTION = 'Other';

//FIELDS
const PRODUCT = 'product';
const BRAND = 'brand';
const SERIES = 'series';
const MODEL = 'model';
const YEAR = 'year';
const SIZE = 'size';
const WEIGHT = 'weight';
const WHEEL_SIZE = 'wheelSize';
const MATERIAL = 'material';

const SPEEDS = "speeds";
const MAX_SPROCKET = "maxSprocket";
const MAX_GEARS = "maxGears";

const TRAVEL = "travel";
const SUSPENSION_TYPE = "suspensionType";
const AXLE_SIZE = "axleSize";


const TYPE = 'type';
const BB_TYPE = 'bottomBracketType';
const BB_SIZE = 'bottomBracketSize';
const FORK_TUBE_TYPE = 'forkTubeType';
const HEADSET_TYPE = 'headsetType';
const READ_WHEEL_AXLE_SIZE = 'rearWheelAxleSize';
const BRAKE_TYPE = 'brakeType';
const SEATPOST_CALIPER_DIAMETER = 'seatpostCaliperDiameter';
const SEATPOST_SIZE = 'seatpostSize';

//PART TYPES
export const FRAME = 'frame';
export const FORK = 'fork';
export const REAR_DERAILLEUR = 'rearDerailleur';
export const FRONT_DERAILLEUR = 'frontDerailleur';
export const CRANK = 'crank';
export const DAMPER = "damper";
export const DISC = "disc";
export const HUB = "hub";
export const RIM = "rim";
export const TYRE = "tyre";
export const WHEEL = "wheel";
export const SADDLE = "saddle";
export const SEATPOST = "seatpost";
export const SEATPOST_CLAMP = "seatpostClamp";
export const CHAINRING = "chainring";
export const CHAIN = "chain";
export const CASSETTE = "cassette";
export const BOTTOM_BRACKET = "bottomBracket";
export const SHIFTER = "shifter";
export const GRIPS = "grips";
export const HANDLEBAR = "handlebar";
export const HEADSET = "headset";
export const STEM = "stem";
export const BRAKE_HYDRAULIC = "brakeHydraulic";
export const BRAKE_CALIPER = "brakeCaliper";
export const BRAKE_LEVER = "brakeLever";
export const COMMON = 'common';

export const PART_GENERAL_FIELDS = [BRAND, MODEL, SERIES, YEAR]

export const FRAME_SPEC = {
    name: FRAME,
    searchBoxes: [BRAND, MODEL, SERIES, YEAR, SIZE, WHEEL_SIZE, MATERIAL],
    columns: [BRAND, MODEL, SERIES, YEAR, SIZE, WHEEL_SIZE, WEIGHT, MATERIAL],
    sections: [
        {name: GENERAL_SECTION, fields: [TYPE, SIZE, WEIGHT]},
        {name: BOTTOM_BRACKET_SECTION, fields: [BB_TYPE, BB_SIZE]},
        {name: STEERING_SECTION, fields: [FORK_TUBE_TYPE, HEADSET_TYPE]},
        {name: OTHER_SECTION, fields: [READ_WHEEL_AXLE_SIZE, BRAKE_TYPE, SEATPOST_CALIPER_DIAMETER, SEATPOST_SIZE]}
    ],
    form: [
        {
            name: GENERAL_SECTION, 
            fields: [BRAND, MODEL, SERIES, YEAR, SIZE, WHEEL_SIZE, WEIGHT, MATERIAL]
        },
        {
            name: BOTTOM_BRACKET_SECTION, 
            fields: [BB_TYPE, BB_SIZE]
        },
        {
            name: STEERING_SECTION, 
            fields: [FORK_TUBE_TYPE, HEADSET_TYPE]
        },
        {
            name: OTHER_SECTION, 
            fields: [READ_WHEEL_AXLE_SIZE, BRAKE_TYPE, SEATPOST_CALIPER_DIAMETER, SEATPOST_SIZE]
        }
    ]
}

export const FORK_SPEC = {
    name: FORK,
    searchBoxes: [BRAND, MODEL, SERIES, YEAR],
    columns: [BRAND, MODEL, SERIES, YEAR, TRAVEL, SUSPENSION_TYPE, AXLE_SIZE, WEIGHT],
    sections: [
        {name: GENERAL_SECTION, fields: [TYPE, SIZE, WEIGHT]}
    ],
    form: []
}

export const REAR_DERAILLEUR_SPEC = {
    name: REAR_DERAILLEUR,
    searchBoxes: [BRAND, MODEL, SERIES, SPEEDS],
    columns: [BRAND, MODEL, SERIES, SPEEDS, MAX_SPROCKET, MAX_GEARS, WEIGHT],
    sections: [
        {name: GENERAL_SECTION, fields: [TYPE, SIZE, WEIGHT]}
    ],
    form: []
}

export const FRONT_DERAILLEUR_SPEC = {
    name: FRONT_DERAILLEUR,
    searchBoxes: [BRAND, MODEL, SERIES],
    columns: [BRAND, MODEL, SERIES, WEIGHT],
    sections: [
        {name: GENERAL_SECTION, fields: [TYPE, SIZE, WEIGHT]}
    ],
    form: []
}

export const CRANK_SPEC = {
    name: CRANK,
    searchBoxes: [BRAND, MODEL, SERIES],
    columns: [BRAND, MODEL, SERIES, WEIGHT],
    sections: [
        {name: GENERAL_SECTION, fields: [TYPE, SIZE, WEIGHT]}
    ],
    form: []
}

export const DAMPER_SPEC = {
    name: DAMPER,
    searchBoxes: [BRAND, MODEL, SERIES],
    columns: [BRAND, MODEL, SERIES, WEIGHT],
    sections: [
        {name: GENERAL_SECTION, fields: [TYPE, SIZE, WEIGHT]}
    ],
    form: []
}

export const DISC_SPEC = {
    name: DISC,
    searchBoxes: [BRAND, MODEL, SERIES],
    columns: [BRAND, MODEL, SERIES, WEIGHT],
    sections: [
        {name: GENERAL_SECTION, fields: [TYPE, SIZE, WEIGHT]}
    ],
    form: []
}

export const HUB_SPEC = {
    name: HUB,
    searchBoxes: [BRAND, MODEL, SERIES],
    columns: [BRAND, MODEL, SERIES, WEIGHT],
    sections: [
        {name: GENERAL_SECTION, fields: [TYPE, SIZE, WEIGHT]}
    ],
    form: []
}

export const RIM_SPEC = {
    name: RIM,
    searchBoxes: [BRAND, MODEL, SERIES],
    columns: [BRAND, MODEL, SERIES, WEIGHT],
    sections: [
        {name: GENERAL_SECTION, fields: [TYPE, SIZE, WEIGHT]}
    ],
    form: []
}

export const TYRE_SPEC = {
    name: TYRE,
    searchBoxes: [BRAND, MODEL, SERIES],
    columns: [BRAND, MODEL, SERIES, WEIGHT],
    sections: [
        {name: GENERAL_SECTION, fields: [TYPE, SIZE, WEIGHT]}
    ],
    form: []
}

export const WHEEL_SPEC = {
    name: WHEEL,
    searchBoxes: [BRAND, MODEL, SERIES],
    columns: [BRAND, MODEL, SERIES, WEIGHT],
    sections: [
        {name: GENERAL_SECTION, fields: [TYPE, SIZE, WEIGHT]}
    ],
    form: []
}

export const SADDLE_SPEC = {
    name: SADDLE,
    searchBoxes: [BRAND, MODEL, SERIES],
    columns: [BRAND, MODEL, SERIES, WEIGHT],
    sections: [
        {name: GENERAL_SECTION, fields: [TYPE, SIZE, WEIGHT]}
    ],
    form: []
}

export const SEATPOST_SPEC = {
    name: SEATPOST,
    searchBoxes: [BRAND, MODEL, SERIES],
    columns: [BRAND, MODEL, SERIES, WEIGHT],
    sections: [
        {name: GENERAL_SECTION, fields: [TYPE, SIZE, WEIGHT]}
    ],
    form: []
}

export const SEATPOST_CLAMP_SPEC = {
    name: SEATPOST_CLAMP,
    searchBoxes: [BRAND, MODEL, SERIES],
    columns: [BRAND, MODEL, SERIES, WEIGHT],
    sections: [
        {name: GENERAL_SECTION, fields: [TYPE, SIZE, WEIGHT]}
    ],
    form: []
}

export const CHAINRING_SPEC = {
    name: CHAINRING,
    searchBoxes: [BRAND, MODEL, SERIES],
    columns: [BRAND, MODEL, SERIES, WEIGHT],
    sections: [
        {name: GENERAL_SECTION, fields: [TYPE, SIZE, WEIGHT]}
    ],
    form: []
}

export const CHAIN_SPEC = {
    name: CHAIN,
    searchBoxes: [BRAND, MODEL, SERIES],
    columns: [BRAND, MODEL, SERIES, WEIGHT],
    sections: [
        {name: GENERAL_SECTION, fields: [TYPE, SIZE, WEIGHT]}
    ],
    form: []
}

export const CASSETTE_SPEC = {
    name: CASSETTE,
    searchBoxes: [BRAND, MODEL, SERIES],
    columns: [BRAND, MODEL, SERIES, WEIGHT],
    sections: [
        {name: GENERAL_SECTION, fields: [TYPE, SIZE, WEIGHT]}
    ],
    form: []
}

export const BOTTOM_BRACKET_SPEC = {
    name: BOTTOM_BRACKET,
    searchBoxes: [BRAND, MODEL, SERIES],
    columns: [BRAND, MODEL, SERIES, WEIGHT],
    sections: [
        {name: GENERAL_SECTION, fields: [TYPE, SIZE, WEIGHT]}
    ],
    form: []
}

export const SHIFTER_SPEC = {
    name: SHIFTER,
    searchBoxes: [BRAND, MODEL, SERIES],
    columns: [BRAND, MODEL, SERIES, WEIGHT],
    sections: [
        {name: GENERAL_SECTION, fields: [TYPE, SIZE, WEIGHT]}
    ],
    form: []
}

export const GRIPS_SPEC = {
    name: GRIPS,
    searchBoxes: [BRAND, MODEL, SERIES],
    columns: [BRAND, MODEL, SERIES, WEIGHT],
    sections: [
        {name: GENERAL_SECTION, fields: [TYPE, SIZE, WEIGHT]}
    ],
    form: []
}

export const HANDLEBAR_SPEC = {
    name: HANDLEBAR,
    searchBoxes: [BRAND, MODEL, SERIES],
    columns: [BRAND, MODEL, SERIES, WEIGHT],
    sections: [
        {name: GENERAL_SECTION, fields: [TYPE, SIZE, WEIGHT]}
    ],
    form: []
}

export const HEADSET_SPEC = {
    name: HEADSET,
    searchBoxes: [BRAND, MODEL, SERIES],
    columns: [BRAND, MODEL, SERIES, WEIGHT],
    sections: [
        {name: GENERAL_SECTION, fields: [TYPE, SIZE, WEIGHT]}
    ],
    form: []
}

export const STEM_SPEC = {
    name: STEM,
    searchBoxes: [BRAND, MODEL, SERIES],
    columns: [BRAND, MODEL, SERIES, WEIGHT],
    sections: [
        {name: GENERAL_SECTION, fields: [TYPE, SIZE, WEIGHT]}
    ],
    form: []
}

export const COMMON_SPEC = {
    name: COMMON,
    searchBoxes: [BRAND, MODEL, SERIES, YEAR],
    columns: [PRODUCT, BRAND, MODEL, SERIES, WEIGHT, YEAR],
    sections: [
        {name: GENERAL_SECTION, fields: [TYPE, SIZE, WEIGHT]}
    ],
    form: []
}

export const SPECIALIZATION = [
    FRAME_SPEC, 
    FORK_SPEC, 
    FRONT_DERAILLEUR_SPEC,
    REAR_DERAILLEUR_SPEC,
    CRANK_SPEC,
    DAMPER_SPEC,
    DISC_SPEC,
    HUB_SPEC,
    RIM_SPEC,
    TYRE_SPEC,
    WHEEL_SPEC,
    SADDLE_SPEC,
    SEATPOST_SPEC,
    SEATPOST_CLAMP_SPEC,
    CHAINRING,
    CHAIN_SPEC,
    CASSETTE_SPEC,
    BOTTOM_BRACKET_SPEC,
    SHIFTER_SPEC,
    GRIPS_SPEC,
    HANDLEBAR_SPEC,
    HEADSET_SPEC,
    BRAKE_HYDRAULIC,
    BRAKE_CALIPER,
    BRAKE_HYDRAULIC,
    COMMON_SPEC
]

export const PART_LIST = [
    FRAME, FORK, REAR_DERAILLEUR, FRONT_DERAILLEUR, CRANK, DAMPER, 
    DISC, HUB, RIM, TYRE, WHEEL, SADDLE, SEATPOST, SEATPOST_CLAMP, CHAINRING, CHAIN,
    CASSETTE, BOTTOM_BRACKET, SHIFTER, GRIPS, HANDLEBAR, HEADSET, STEM,
    BRAKE_CALIPER, BRAKE_HYDRAULIC, BRAKE_LEVER
]

export function findSpec(specName) {
    return SPECIALIZATION.find(spec => spec.name === specName)
}