class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    return console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
  clone() {
    return new Person(this.name, this.age);
  }
}

const personOne = new Person("Tiến Tài", 23);
const personTwo = personOne.clone();
personTwo.name = "Nguyen Tien Tai";
personTwo.age = 22;

personOne.introduce(); // Hi, my name is Tiến Tài and I am 23 years old.
personTwo.introduce(); // Hi, my name is Tài Dev and I am 25 years old.
