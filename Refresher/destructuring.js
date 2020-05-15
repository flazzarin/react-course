// destructuring arrays

const numbers = [1, 2, 3];

[num1, , num3] = numbers;


console.log(num1, num3);

// destructuring object

{name} = {name: 'Max', age: 28}
console.log(name) //Max
console.log(age) //undefined