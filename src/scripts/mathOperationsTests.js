import {
    add,
    sub,
    div,
    mul,
    root2Validation,
    root3Validation,
    rootXYValidation,
    pow,
    factorial,
} from './arithmeticUnitValidation.js';

test('Division && 1/X', () => {
    expect(div(0.3, 0.2)).toBe(1.5);
    expect(div(5, 1)).toBe(5);
    expect(div(0, 10)).toBe(0);
    expect(div(10, 20)).toBe(0.5);
    expect(div(4, 2)).toBe(2);
    expect(div(9, -3)).toBe(-3);
    expect(div(-9, 3)).toBe(-3);
    expect(div(-9, -3)).toBe(3);
    expect(div(1, 25)).toBe(0.04);
    expect(div(1, -25)).toBe(-0.04);
    expect(div(1, 0)).toBe('error: division by zero');
});

test('Multiply', () => {
    expect(mul(1, 0, 1)).toBe(0);
    expect(mul(0.3, 0.2, 1)).toBe(0.06);
    expect(mul(5, -4, 1)).toBe(-20);
    expect(mul(3, 10, 1)).toBe(30);
    expect(mul(10, 20, 1)).toBe(200);
    expect(mul(0.5, 2, 1)).toBe(1);
    expect(mul(1e17, 1e8, 1)).toBe('error: too big number');
});

test('Add', () => {
    expect(add(1, 3)).toBe(4);
    expect(add(0.1, 0.3)).toBe(0.4);
    expect(add(10, 20)).toBe(30);
    expect(add(0.5, 0.5)).toBe(1);
    expect(add(100, 150)).toBe(250);
    expect(add(9, 8)).toBe(17);
    expect(add(1e17, 1e18)).toBe('error: too big number');
});

test('Substraction', () => {
    expect(sub(1, 3)).toBe(-2);
    expect(sub(0.3, 0.2)).toBe(0.1);
    expect(sub(10, 20)).toBe(-10);
    expect(sub(0.5, 0.5)).toBe(0);
    expect(sub(320, 150)).toBe(170);
    expect(sub(9, 8)).toBe(1);
});

test('X^2 && X^3', () => {
    expect(mul(1, 1, 1)).toBe(1);
    expect(mul(-7, -7, 1)).toBe(49);
    expect(mul(10, 10, 1)).toBe(100);
    expect(mul(0.1, 0.1, 1)).toBe(0.01);
    expect(mul(0.01, 0.01, 1)).toBe(0.0001);
});

test('X^Y', () => {
    expect(pow(10, 0)).toBe(1);
    expect(pow(0.1, 3)).toBe(0.001);
    expect(pow(3, 4)).toBe(81);
    expect(pow(-3, 4)).toBe(81);
    expect(pow(0.5, 2)).toBe(0.25);
    expect(pow(-2, 3)).toBe(-8);
    expect(pow(4, 0.5)).toBe(2);
    expect(pow(10, 1000)).toBe('error: too big number');
});

test('10^X', () => {
    expect(pow(10, 2)).toBe(100);
    expect(pow(10, 0)).toBe(1);
    expect(pow(10, -2)).toBe(0.01);
    expect(pow(10, 1000)).toBe('error: too big number');
});

test('root2', () => {
    expect(root2Validation(1)).toBe(1);
    expect(root2Validation(0)).toBe(0);
    expect(root2Validation(0.25)).toBe(0.5);
    expect(root2Validation(100)).toBe(10);
    expect(root2Validation(-16)).toBe('enter positive integer');
    expect(root2Validation(81)).toBe(9);
    expect(root2Validation(1024)).toBe(32);
});

test('root3', () => {
    expect(root3Validation(1)).toBe(1);
    expect(root3Validation(0)).toBe(0);
    expect(root3Validation(125)).toBe(5);
    expect(root3Validation(1000)).toBe(10);
    expect(root3Validation(-1000)).toBe(-10);
    expect(root3Validation(0.125)).toBe(0.5);
    expect(root3Validation(-0.001)).toBe(-0.1);
    expect(root3Validation(27)).toBe(3);
    expect(root3Validation(-27)).toBe(-3);
    expect(root3Validation(15625)).toBe(25);
});

test('rootY', () => {
    expect(rootXYValidation(10, 1)).toBe(10);
    expect(rootXYValidation(25, 2)).toBe(5);
    expect(rootXYValidation(-27, 3)).toBe(-3);
    expect(rootXYValidation(-81, 2)).toBe('invalid value');
    expect(rootXYValidation(0.125, 3)).toBe(0.5);
    expect(rootXYValidation(10000, 4)).toBe(10);
    expect(rootXYValidation(25, 0.5)).toBe(625);
});

test('X!', () => {
    expect(factorial(2)).toBe(2);
    expect(factorial(0)).toBe(1);
    expect(factorial(5)).toBe(120);
    expect(factorial(8)).toBe(40320);
    expect(factorial(1)).toBe(1);
    expect(factorial(-2)).toBe('invalid value');
    expect(factorial(2.2)).toBe('invalid value');
    expect(factorial(19)).toBe(`too big ${Number.MAX_SAFE_INTEGER}`);
});
