"use strict";
class RemoteControl {
  constructor() {
    this.turnOnCommand = null;
    this.turnOffCommand = null;
  }

  setTurnOnCommand(command) {
    this.turnOnCommand = command;
  }

  setTurnOffCommand(command) {
    this.turnOffCommand = command;
  }

  turnOn() {
    this.turnOnCommand.execute();
  }

  turnOff() {
    this.turnOffCommand.execute();
  }
}

class Light {
  turnOn() {
    console.log("Light is on");
  }

  turnOff() {
    console.log("Light is off");
  }
}

class TurnOnCommand {
  constructor(light) {
    this.light = light;
  }

  execute() {
    this.light.turnOn();
  }
}

class TurnOffCommand {
  constructor(light) {
    this.light = light;
  }

  execute() {
    this.light.turnOff();
  }
}

// Sử dụng
const light = new Light();
const turnOnCommand = new TurnOnCommand(light);
const turnOffCommand = new TurnOffCommand(light);

console.log(turnOnCommand);
const remoteControl = new RemoteControl();
remoteControl.setTurnOnCommand(turnOnCommand);
remoteControl.setTurnOffCommand(turnOffCommand);

remoteControl.turnOn(); // In ra "Light is on"
remoteControl.turnOff(); // In ra "Light is off"
