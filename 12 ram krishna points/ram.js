
const person1 = {
    name: "Ram",
    age: 25,
    power: 2500
}
const person2 = {
    name: "Krishna",
    age: 31,
    power: 2325
}

let person1Power;
let person2Power;

function checkAge(person1, person2) {
    person1Power = (person1.name.length) * 35 + person1.power;
    person2Power = (person2.name.length) * 35 + person2.power;

    if (person1Power > person2Power) {
        return person1;
    } else {
        return person2;
    }
}

let greaterPowerPerson = checkAge(person1, person2);

console.log(greaterPowerPerson.name + " has more power than " + (person1.name == greaterPowerPerson.name ? person2.name : person1.name))
console.log("power of Ram is: " + person1Power)
console.log("power of Krishna is: " + person2Power)