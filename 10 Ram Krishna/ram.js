const person1 = {
    name: "Ram",
    age: 25,
    yuga: "Treta"
}
const person2 = {
    name: "Krishna",
    age: 31,
    yuga: "Dwapar"
}

function checkAge(person1, person2) {
    if (person1.age > person2.age) {
        return person1;
    } else
     {
        return person2;
    }
}

let greaterAgePerson = checkAge(person1, person2);

console.log(greaterAgePerson.name)