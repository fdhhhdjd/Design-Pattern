//* V1
class Counter {
  constructor({ counter }) {
    if (Counter.instance) {
      return Counter.instance;
    }
    Counter.instance = this;

    //Init counter
    this.counter = counter;
  }

  static getInstance() {
    return Counter.instance;
  }

  getCount() {
    return this.counter;
  }

  increment() {
    return ++this.counter;
  }

  decrement() {
    return --this.counter;
  }
}

const getCounter = (counter) => {
  const counter1 = new Counter({ counter: counter });
  console.log(counter1.getCount()); // 15

  const counter2 = Counter.getInstance();
  console.log(counter2.getCount()); // 15

  const counter3 = Counter.getInstance();
  console.log(counter3.increment());

  console.log(counter1 === counter2); // true
};
getCounter(15);
