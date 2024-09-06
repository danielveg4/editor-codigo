const isEven = (a) => a%2 === 0;
const divide = (a,b) => {
    if (b !== 0) {
        return a/b;
    }
    // throw new Error('No se puede dividir por 0');
    return null;
};

module.exports = { isEven, divide};