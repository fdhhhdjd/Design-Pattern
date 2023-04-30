"use strict";

class RegistrationFormBuilder {
  constructor() {
    this.name = "";
    this.email = "";
    this.password = "";
  }

  setName(name) {
    this.name = name;
    return this;
  }

  setEmail(email) {
    this.email = email;
    return this;
  }

  setPassword(password) {
    this.password = password;
    return this;
  }

  validateName() {
    if (!this.name) {
      throw new Error("Name Cannot  Be Left  Blank.");
    }
  }

  validateEmail() {
    if (!this.email) {
      throw new Error("Email Cannot  Be Left  Blank.");
    }

    if (!this.email.includes("@")) {
      throw new Error("Email invalid");
    }
  }

  validatePassword() {
    if (!this.password) {
      throw new Error("Password Cannot  Be Left  Blank.");
    }

    if (this.password.length < 6) {
      throw new Error("Password must at least 6 characters.");
    }
  }

  build() {
    this.validateName();
    this.validateEmail();
    this.validatePassword();

    return {
      name: this.name,
      email: this.email,
      password: this.password,
    };
  }
}

// Sử dụng
const registrationForm = new RegistrationFormBuilder()
  .setName("Nguyễn Tiến Tài")
  .setEmail("nguyentientai@gmail.com")
  .setPassword("password123")
  .build();

console.log(registrationForm);
