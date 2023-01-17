// factorial validation
export const factorial = (x, val = 1) => {
    if (x > 18) {
        return `too big ${Number.MAX_SAFE_INTEGER}`;
    }
    if (x < 0 || !Number.isInteger(x)) {
        return 'invalid value';
    }
    if (x === 1 || x === 0) {
        return val;
    }

    for (let i = 2; i <= x; i++) {
        val *= i;
    }

    return val;
};

// division validation (extension 0)
export const div = (x, y) => {
    let res = 0;
    res = (x / y).toFixed(5) * 1;
    return Number.isFinite(res) ? res : 'error: division by zero';
};

// add validation (MAX_SAFE_INTEGER and 0.1+0.2)
export const add = (x, y) => {
    let res = 0;
    res = (10 * x + y * 10) / 10;
    return res < Number.MAX_SAFE_INTEGER ? res : 'error: too big number';
};

// substraction validation
export const sub = (x, y) => (x * 10 - y * 10) / 10;

// multiply validation (MAX_SAFE_INTEGER)
export const mul = (x, y, value) => {
    let res = 0;
    res = (x * y * value).toFixed(7) * 1;
    return res < Number.MAX_SAFE_INTEGER ? res : 'error: too big number';
};

// pow validation
export const pow = (x, y) => {
    let res = 0;
    res = (x ** y).toFixed(5) * 1;
    return res < Number.MAX_SAFE_INTEGER ? res : 'error: too big number';
};

// root2 validation
export const root2Validation = (x) => {
    if (x < 0) {
        return 'enter positive integer';
    }
    return x ** (1 / 2);
};

// root3 validation (heron)
export const root3Validation = (x) => {
    let cubeRoot = x / 3;
    let temp = 0;

    while (cubeRoot !== temp) {
        temp = cubeRoot;
        cubeRoot = (x / (temp * temp) + temp * 2) / 3;
    }
    return cubeRoot.toFixed(5) * 1;
};

// root Y from X validation
export const rootXYValidation = (x, y) => {
    if ((x < 0 && y % 2 === 0) || y === 0) {
        return 'invalid value';
    }
    if (x < 0 && y === 3) {
        let cubeRoot = x / 3;
        let temp = 0;

        while (cubeRoot !== temp) {
            temp = cubeRoot;
            cubeRoot = (x / (temp * temp) + temp * 2) / 3;
        }
        return cubeRoot.toFixed(5) * 1;
    }

    return x ** (1 / y);
};
