class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
  clone() {
    return new Person(this.name, this.age);
  }
}

const john = new Person("Tiến Tài", 23);
const jane = john.clone();
jane.name = "Tài Dev";

john.introduce(); // Hi, my name is John and I am 25 years old.
jane.introduce(); // Hi, my name is Jane and I am 25 years old.
