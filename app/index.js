module.exports = {
    sum: function (firstAlgorithm, secondAlgorithm) {
        if (typeof firstAlgorithm !== "number" || typeof secondAlgorithm !== "number") {
            return undefined;
        }
        return firstAlgorithm + secondAlgorithm;
    },
    subtract: function (firstAlgorithm, secondAlgorithm) {
        if (typeof firstAlgorithm !== "number" || typeof secondAlgorithm !== "number") {
            return undefined;
        }
        return firstAlgorithm - secondAlgorithm;
    },
    multiply: function (x, y) {
        if (typeof x !== "number" || typeof y !== "number") {
            return undefined;
        }
        return x * y;
    },
    divide: function (divisor, divider) {
        if (typeof divisor !== "number" || typeof divider !== "number") {
            return undefined;
        }
        if (divider === 0) {
            return "Impossible to divide by zero";
        }
        return divisor / divider;
    }
};