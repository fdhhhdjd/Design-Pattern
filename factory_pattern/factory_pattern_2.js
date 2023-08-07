class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  getInfo() {
    return `Product: ${this.name}, Price: ${this.price}`;
  }
}

class Phone extends Product {
  constructor(name, price, brand, model) {
    super(name, price);
    this.brand = brand;
    this.model = model;
  }
  getInfo() {
    return `${super.getInfo()},Brand: ${this.brand}, Model: ${this.model}`;
  }
}

class Shirt extends Product {
  constructor(name, price, size, color) {
    super(name, price);
    this.size = size;
    this.color = color;
  }

  getInfo() {
    return `${super.getInfo()}, Size: ${this.size}, Color: ${this.color}`;
  }
}

class ProductFactory {
  createProduct(type, ...arg) {
    switch (type) {
      case "phone":
        return new Phone(...arg);
      case "shirt":
        return new Shirt(...arg);
      default:
        throw new Error("Invalid product type.");
    }
  }
}

const factory = new ProductFactory();

const newPhone = factory.createProduct(
  "phone",
  "I Phone 10",
  1000,
  "apple",
  "iphone"
);
console.log(newPhone.getInfo());

const newShirt = factory.createProduct("shirt", "T-shirt", 20, "M", "Blue");
console.log(newShirt.getInfo());
