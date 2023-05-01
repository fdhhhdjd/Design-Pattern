class TrafficLight {
  constructor() {
    this.state = new RedLightState(this);
  }

  changeState(state) {
    this.state = state;
  }

  start() {
    this.state.start();
  }
}

class RedLightState {
  constructor(light) {
    this.light = light;
  }

  start() {
    console.log("Red Light");
    setTimeout(() => {
      this.light.changeState(new GreenLightState(this.light));
      this.light.start();
    }, 2000);
  }
}

class GreenLightState {
  constructor(light) {
    this.light = light;
  }

  start() {
    console.log("Green Light");
    setTimeout(() => {
      this.light.changeState(new YellowLightState(this.light));
      this.light.start();
    }, 2000);
  }
}

class YellowLightState {
  constructor(light) {
    this.light = light;
  }

  start() {
    console.log("Yellow Light");
    setTimeout(() => {
      this.light.changeState(new RedLightState(this.light));
      this.light.start();
    }, 2000);
  }
}

const trafficLight = new TrafficLight();
trafficLight.start();
