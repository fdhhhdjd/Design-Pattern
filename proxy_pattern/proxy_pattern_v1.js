// * v1
class Person {
  constructor({ name, age }) {
    this.name = name;
    this.age = age;
  }
}

class PersonProxy {
  constructor(person) {
    this.person = person;
    this.checkProperties();
  }
  checkProperties() {
    for (const [prop, value] of Object.entries(this.person)) {
      if (value == null) console.log(`${prop} is null`);
      if (value === undefined) console.log(`${prop} is undefined`);
    }
  }

  isPropertyValid(prop) {
    if (!this.person || !(prop in this.person)) {
      console.log(
        `Hmm.. this property doesn't seem to exist on the target object`
      );
      return false;
    }
    const value = this.person[prop];
    if (value === undefined || value === null) {
      console.log(`Hmm.. this property doesn't seem to have a valid value`);
      return false;
    }
    return true;
  }

  get(prop) {
    if (!this.isPropertyValid(prop)) return;
    return console.log(`The value of ${prop} is ${this.person[prop]}`);
  }

  set(prop, value) {
    if (!this.isPropertyValid(prop)) return;

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

const person = new Person({ name: "Tai dev", age: 23 });
const personProxy = new PersonProxy(person);

personProxy.get("name");
personProxy.set("name", "Nguyen Tien Tai");
