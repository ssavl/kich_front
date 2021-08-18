import { parseFloatValue } from './parsers';

export const plural = (number, one, two, five) => {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) {
        return five;
    }
    n %= 10;
    if (n === 1) {
        return one;
    }
    if (n >= 2 && n <= 4) {
        return two;
    }
    return five;
};

export const formatNumbersFieldForBack = phone => phone.replace(/[\(\)\s\-']+/g, '');

export const formatPriceNumber = (value = '') => {
    if (value === null) return '';

    const parseResult = parseFloatValue(value);

    let integer = parseResult[0];
    const fraction = parseResult[1];

    if (fraction !== null) {
        integer = integer === null ? 0 : integer;
    }

    if (integer !== null) {
        const formattedInteger = String(integer).replace(/(.)(?=(\d{3})+$)/g, '$1 ');
        if (fraction !== null) {
            return `${formattedInteger}.${fraction} ₽`;
        }
        const hasDot = /\.|\,/.test(value);
        return hasDot ? `${formattedInteger}.` : `${formattedInteger} ₽`;
    }
    return '';
};
