//variable for kelvin
const kelvin = 294;

//finding celsius variable
const celsius = kelvin - 273;

//finding fahrenheit
let fahrenheit = celsius * (9/5) + 32;

//rounding far.
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)