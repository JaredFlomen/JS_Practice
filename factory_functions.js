const personFactory = (name, age) => {
  const sayHello = () => console.log('Hello!');
  return { name, age, sayHello };
};

const jared = personFactory('Jared', 26);
console.log(jared.name);
jared.sayHello();

const firstName = 'Jared';
const color = 'Blue';
const dogName = 'Kobe';
console.log({ firstName, color, dogName });

// Closure and Scope
// Scope - variable access
// Polluting the root scope: when a variable is defined without var/let/const and is defined in the root scope
// Use strict prevents from cluttering the root scope (example above, get a reference error)
// Closures allow us to create private variables and functions

const FactoryFunction = string => {
  const capitalizeString = () => string.toUpperCase();
  const printString = () => console.log(`--${capitalizeString()}--`);
  return { printString };
};

const flomen = FactoryFunction('flomen');
flomen.printString();

const counterCreator = () => {
  let count = 0;
  return () => {
    console.log(count);
    count++;
  };
};

const counter = counterCreator();

counter();
counter();

// Module Pattern
// Immediately invoked function expression
const calculator = (() => {
  const add = (a, b) => console.log(a + b);
  return { add };
})();

calculator.add(2, 4);
