class Product {
  constructor(name, price, pricingStrategy) {
    this.name = name;
    this.price = price;
    this.pricingStrategy = pricingStrategy;
  }
  getPrice() {
    return this.pricingStrategy.calculatePrice(this.price);
  }
  getInfo() {
    return `Product: ${this.name}, Price: ${this.getPrice()}`;
  }
}

class PricingStrategy {
  calculatePrice(price) {
    return price;
  }
}

// Strategy discount 10%
class DiscountStrategyTenPercent extends PricingStrategy {
  calculatePrice(price) {
    return price - price * 0.1;
  }
}

class DiscountStrategyTwentyPercent extends PricingStrategy {
  calculatePrice(price) {
    return price - price * 0.2;
  }
}

// Not discount
const normalPriceStrategy = new PricingStrategy();

// Discount 10%
const tenPercentDiscountStrategy = new DiscountStrategyTenPercent();

// Discount 20%
const twentyPercentDiscountStrategy = new DiscountStrategyTwentyPercent();

const TotalPhone = new Product("Phone", 1000, normalPriceStrategy);
console.log(TotalPhone.getInfo());

const TotalShirt = new Product("Shirt", 1000, tenPercentDiscountStrategy);
console.log(TotalShirt.getInfo());

const TotalHat = new Product("Hat", 1000, twentyPercentDiscountStrategy);
console.log(TotalHat.getInfo());
