// primitive types

const number = 1;
const num2 = number; // a copy of the constant is assigned to the new constant

console.log(num2); //1

// reference types

const person = {
    name: 'Max'
};

const secondPerson = person; // only the memory pointer is copied here, not the whole object

person.name = 'Manu'; //changing the value in the first object changes the value of the second, because it is just a reference

console.log(secondPerson);

// now using the spread operator
const person = {
    name: 'Max'
};

const secondPerson = {
    ...person //this copies the _properties_ of the object, and not just the pointer
}

person.name = 'Manu'; // reassigning it now won't change the value of secondPerson

console.log(secondPerson);
console.log(person);