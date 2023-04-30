"use strict";

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class MathClass {
  constructor(students) {
    this.students = students;
  }
}

class EnglishClass {
  constructor(students) {
    this.students = students;
  }
}

class ClassFactory {
  static createMathClass(students) {
    return new MathClass(students);
  }

  static createEnglishClass(students) {
    return new EnglishClass(students);
  }
}
// Sử dụng ClassFactory để tạo đối tượng lớp học và học sinh
const studentOne = new Student("Nguyễn Tiến Tài", 23);
const studentTwo = new Student("Nguyễn Thị Thu Hiền", 15);

const mathClass = ClassFactory.createMathClass([studentOne, studentTwo]);
const englishClass = ClassFactory.createEnglishClass([studentOne]);
console.log(mathClass);
console.log(englishClass);
