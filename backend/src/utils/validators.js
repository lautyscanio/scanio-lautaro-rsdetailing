export const isNonEmptyString = (value) => {
    return typeof value === "string" && value.trim().length > 0;
};

export const isPositiveNumber = (value) => {
    return typeof value === "number" && Number.isFinite(value) && value > 0;
};

export const isPositiveInteger = (value) => {
    return Number.isInteger(value) && value > 0;
};

export const parseId = (value) => {
    return /^\d+$/.test(value) ? Number(value) : null;
};
