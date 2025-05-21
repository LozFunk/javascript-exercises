const palindromes = function (x) {
    const backwardStr = x.split('').reverse().join('').toLowerCase()
    return backwardStr === x
};

// Do not edit below this line
module.exports = palindromes;
