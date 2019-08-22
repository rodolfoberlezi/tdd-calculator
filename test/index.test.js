const chai = require('chai');
const { expect } = chai;

const calculator = require('../app/index');

//suite test
describe('Sum method', () => {
    it('Sums two numbers => 2 + 2', (done) => {
        const result = calculator.sum(2, 2);
        expect(result).be.equal(4);
        done();
    });

    it('Sums two numbers => -2 + -1', (done) => {
        const result = calculator.sum(-2, -1);
        expect(result).be.equal(-3);
        done();
    });

    it('Sums two numbers => null + 2', (done) => {
        const result = calculator.sum(null, 2);
        expect(result).be.equal(undefined);
        done();
    });

    it('Sums two numbers => "string" + 2', (done) => {
        const result = calculator.sum("string", 2);
        expect(result).be.equal(undefined);
        done();
    });
});

describe('Subtraction', () => {
    it('Subtracts two numbers => 5 - 3', (done) => {
        const result = calculator.subtract(5, 3);
        expect(result).be.equal(2);
        done();
    });

    it('Subtracts two numbers => -5 - -3', (done) => {
        const result = calculator.subtract(-5, -3);
        expect(result).be.equal(-2);
        done();
    });

    it('Subtracts two numbers => 5 - null', (done) => {
        const result = calculator.subtract(5, null);
        expect(result).be.equal(undefined);
        done();
    });

    it('Subtracts two numbers => "string" - 3', (done) => {
        const result = calculator.subtract("string", 3);
        expect(result).be.equal(undefined);
        done();
    });
});

describe('Multiply', () => {
    it('Multiply two numbers => 3 * 3', (done) => {
        const result = calculator.multiply(3, 3);
        expect(result).be.equal(9);
        done();
    });

    it('Multiply two numbers => -5 * 3', (done) => {
        const result = calculator.multiply(-5, 3);
        expect(result).be.equal(-15);
        done();
    });

    it('Multiply two numbers => 0 * 3', (done) => {
        const result = calculator.multiply(0, 3);
        expect(result).be.equal(0);
        done();
    });

    it('Multiply two numbers => 5 * null', (done) => {
        const result = calculator.multiply(5, null);
        expect(result).be.equal(undefined);
        done();
    });

    it('Multiply two numbers => "string" * 3', (done) => {
        const result = calculator.multiply("string", 3);
        expect(result).be.equal(undefined);
        done();
    });
});

describe('Divide', () => {
    it('Divide two numbers => 3 / 3', (done) => {
        const result = calculator.divide(3, 3);
        expect(result).be.equal(1);
        done();
    });

    it('Divide two numbers => -4 / 2', (done) => {
        const result = calculator.divide(-4, 2);
        expect(result).be.equal(-2);
        done();
    });

    it('Divide two numbers => 0 / 3', (done) => {
        const result = calculator.divide(0, 3);
        expect(result).be.equal(0);
        done();
    });

    it('Divide two numbers => 7 / 0', (done) => {
        const result = calculator.divide(7, 0);
        expect(result).be.equal("Impossible to divide by zero");
        done();
    });

    it('Divide two numbers => 5 / null', (done) => {
        const result = calculator.divide(5, null);
        expect(result).be.equal(undefined);
        done();
    });

    it('Divide two numbers => "string" / 3', (done) => {
        const result = calculator.divide("string", 3);
        expect(result).be.equal(undefined);
        done();
    });
});