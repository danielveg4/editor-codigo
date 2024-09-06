const sum = (a, b) => a + b;

const createPerson = (name, age) => {
  return {
    name,
    age,
  };
};

module.exports = { sum, createPerson};