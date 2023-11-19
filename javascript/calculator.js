// calculator: Object contains functions for basic operaions: add, subtract, divide, and multiply.
const calculator = {
    add(nOne , nTwo){
        return nOne + nTwo;
    },

    subtract(nOne, nTwo){
        return nOne - nTwo;
    },

    divide(nOne, nTwo){
        if (nTwo === 0)
            return undefined;
        else
            return nOne / nTwo;
    },

    multiply(nOne, nTwo){
        return nOne * nTwo;
    }
}
module.exports = calculator;
