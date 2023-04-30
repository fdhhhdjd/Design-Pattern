class Subject {
  constructor() {
    this.observers = [];
  }
  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    const index = this.observers.indexOf(observer);
    let removedObserver;
    if (index > -1) {
      removedObserver = this.observers.splice(index, 1)[0];
    }
    return console.log(
      `${removedObserver.name} received message: Unsubscribed`
    );
  }

  notify(message) {
    this.observers.forEach((observer) => observer.update(message));
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }

  update(message) {
    console.log(`${this.name} received message: ${message}`);
  }
}

// Tạo một Subject mới
const subject = new Subject();

// Tạo các Observer mới
const observer1 = new Observer("Nguyễn Tiến Tài");
const observer2 = new Observer("Lê Bảo");
const observer3 = new Observer("Sơn Tùng");

// Đăng ký các Observer cho Subject
subject.subscribe(observer1);
subject.subscribe(observer2);
subject.subscribe(observer3);

// Thông báo cho các Observer về sự kiện mới
subject.notify("subscribed");

// Hủy đăng ký Observer2
subject.unsubscribe(observer2);

// Thông báo cho các Observer về sự kiện mới
subject.notify("Only subscribed");
