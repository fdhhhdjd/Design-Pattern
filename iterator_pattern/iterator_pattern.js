"use strict";

class Iterator {
  constructor(collection) {
    this.collection = collection;
    this.index = 0;
  }

  hasNext() {
    return this.index < this.collection.length;
  }

  next() {
    return this.hasNext() ? this.collection[this.index++] : null;
  }
}

// Sử dụng Iterator để lặp qua một mảng
const names = ["Nguyễn Tiến Tài", "Nguyễn Duy Thịnh", "Thái Văn Nam"];
const iterator = new Iterator(names);

while (iterator.hasNext()) {
  const name = iterator.next();
  console.log(name);
}
