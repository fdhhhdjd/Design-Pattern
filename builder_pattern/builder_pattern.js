"use strict";

class Car {
  constructor(builder) {
    this.make = builder.make;
    this.model = builder.model;
    this.color = builder.color;
    this.engine = builder.engine;
    this.wheels = builder.wheels;
    this.seats = builder.seats;
  }
}

class CarBuilder {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this.color = "white";
    this.engine = "V6";
    this.wheels = 4;
    this.seats = 5;
  }

  setColor(color) {
    this.color = color;
    return this;
  }

  setEngine(engine) {
    this.engine = engine;
    return this;
  }

  setWheels(wheels) {
    this.wheels = wheels;
    return this;
  }

  setSeats(seats) {
    this.seats = seats;
    return this;
  }

  build() {
    return new Car(this);
  }
}
const Toyota = new CarBuilder("Toyota", "Camry")
  .setColor("red")
  .setEngine("V8")
  .setWheels(6)
  .setSeats(7)
  .build();

const Mercedes = new CarBuilder("Mercedes", "C200")
  .setColor("black")
  .setEngine("V13")
  .setWheels(6)
  .setSeats(4)
  .build();

console.log("Car One::::", Toyota);
console.log("Car Tow::::", Mercedes);
