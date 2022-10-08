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

function checkAge(person1, person2) {
    if (person1.power > person2.power) {
        return person1;
    } else {
        return person2;
    }
}

let greaterPowerPerson = checkAge(person1, person2);

console.log(greaterPowerPerson.name + " has more power than " + (person1.name == greaterPowerPerson.name ? person2.name : person1.name))