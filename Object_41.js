let person = {
    name: "John",
    age: 30,
    city: "New York"
};
console.log(person.name);
console.log(person.age);
console.log(person.city);
person.country = "USA";
console.log(person.country);
delete person.age;
console.log(person);

person.age = 25;
console.log(person.age);