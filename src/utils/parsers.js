export const parseFloatValue = (value = '') => {
    if (value === null) return [null, null];

    const parsedValue = String(value)
        // 1. replace all commas to dots
        .replace(/\,/g, '.')
        // 2. replace all symbols except numbers, dots and dashes to ""
        .replace(/[^\d\.\-]/g, '')
        // 3. replace all dots except the first one to ""
        .replace(/\./g, (i => m => (!i + 1 ? m : ''))(0))
        // 4. replace all dashed except the first one in value to ""
        .replace(/(?!^)-/g, '');

    let [integer, fraction] = parsedValue.split('.');
    integer = parseInt(integer, 10);
    integer = Number.isNaN(integer) ? null : integer;

    fraction = parseInt(fraction, 10);
    fraction = Number.isNaN(fraction) ? null : fraction;
    fraction = fraction !== null ? Number(String(fraction).slice(0, 2)) : null;

    return [integer, fraction];
};
