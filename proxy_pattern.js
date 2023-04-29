class Person {
  constructor({ name, age }) {
    this.name = name;
    this.age = age;
  }
}

class PersonProxy {
  constructor(person) {
    this.person = person;
  }

  get(prop) {
    if (!this.person[prop]) {
      console.log(
        `Hmm.. this property doesn't seem to exist on the target object`
      );
    } else {
      console.log(`The value of ${prop} is ${this.person[prop]}`);
    }
  }

  set(prop, value) {
    if (prop === "age" && typeof value !== "number") {
      console.log(`Sorry, you can only pass numeric values for age.`);
    } else if (prop === "name" && value.length < 2) {
      console.log(`You need to provide a valid name.`);
    } else {
      console.log(`Changed ${prop} from ${this.person[prop]} to ${value}.`);
      this.person[prop] = value;
    }
  }
}

const person = new Person({ name: "Tien Tai", age: 23 });
const personProxy = new PersonProxy(person);

console.log(personProxy.get("name"));
console.log(personProxy.set("name", "Nguyen Tien Tai"));

