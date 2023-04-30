"use strict";

// Strategy interface
class PricingStrategy {
  calculatePrice(price) {
    return 0;
  }

  calculateDiscount(price) {
    return 0;
  }
}

// Concrete strategies
class BoysToysPricingStrategy extends PricingStrategy {
  constructor({ discount = 0 }) {
    super();
    this.discount = discount;
  }

  calculatePrice(price) {
    return price * 1.2;
  }

  calculateDiscount(price) {
    return price * (this.discount / 100);
  }
}

class GirlsToysPricingStrategy extends PricingStrategy {
  constructor({ discount = 0 }) {
    super();
    this.discount = discount;
  }

  calculatePrice(price) {
    return price * 1.3;
  }

  calculateDiscount(price) {
    return price * (this.discount / 100);
  }
}

// Khai báo lớp sản phẩm
class Product {
  constructor({ name, price, pricingStrategy }) {
    this.name = name;
    this.price = price;
    this.pricingStrategy = pricingStrategy;
  }

  setPricingStrategy(pricingStrategy) {
    this.pricingStrategy = pricingStrategy;
  }

  getPrice() {
    return (
      this.pricingStrategy.calculatePrice(this.price) -
      this.pricingStrategy.calculateDiscount(this.price)
    );
  }
}

// Sử dụng
const toyBoy = new Product({
  name: "car",
  price: 100,
  pricingStrategy: new BoysToysPricingStrategy({ discount: 30 }),
});
console.log(`Price Toy Boy: ${toyBoy.getPrice()}`);

const toyGrill = new Product({
  name: "Doll",
  price: 100,
  pricingStrategy: new GirlsToysPricingStrategy({ discount: 20 }),
});
console.log(`Price Toy Grill: ${toyGrill.getPrice()}`);
