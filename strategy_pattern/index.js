// Các chiến lược tính giá cước giao hàng
class StandardShipping {
  calculateCost(order) {
    return order.weight * 10;
  }
}

class ExpressShipping {
  calculateCost(order) {
    return order.weight * 20 + 10; // Giao nhanh với chi phí thêm
  }
}

class PostalShipping {
  calculateCost(order) {
    return order.weight * 5; // Giao qua bưu điện rẻ hơn
  }
}

// Context: Lớp này sử dụng các chiến lược tính phí vận chuyển
class ShippingCost {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  calculate(order) {
    return this.strategy.calculateCost(order);
  }
}

// Ví dụ sử dụng
const order = { weight: 5 }; // Đơn hàng có trọng lượng 5kg

const standardShipping = new StandardShipping();
const expressShipping = new ExpressShipping();
const postalShipping = new PostalShipping();

const shippingCost = new ShippingCost(standardShipping);

console.log("Standard Shipping: ", shippingCost.calculate(order)); // Kết quả dựa trên StandardShipping

// Đổi sang Express Shipping
shippingCost.setStrategy(expressShipping);
console.log("Express Shipping: ", shippingCost.calculate(order)); // Kết quả dựa trên ExpressShipping

// Đổi sang Postal Shipping
shippingCost.setStrategy(postalShipping);
console.log("Postal Shipping: ", shippingCost.calculate(order)); // Kết quả dựa trên PostalShipping
