class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

// Lớp danh sách sản phẩm trong E-commerce
class ProductList {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  // Phương thức tạo Iterator cho danh sách sản phẩm
  createIterator() {
    return new ProductIterator(this.products);
  }
}

// Lớp Iterator để duyệt qua danh sách sản phẩm
class ProductIterator {
  constructor(products) {
    this.products = products;
    this.index = 0;
  }

  // Phương thức kiểm tra xem còn phần tử tiếp theo hay không
  hasNext() {
    return this.index < this.products.length;
  }

  // Phương thức lấy phần tử tiếp theo trong danh sách
  next() {
    if (this.hasNext()) {
      const product = this.products[this.index];
      this.index++;
      return product;
    }
    return null;
  }
}

const product1 = new Product("Phone", 1000);
const product2 = new Product("Laptop", 1500);
const product3 = new Product("Shirt", 50);

// Sử dụng Iterator Pattern
const productList = new ProductList();

productList.addProduct(product1);
productList.addProduct(product2);
productList.addProduct(product3);

const iterator = productList.createIterator();
while (iterator.hasNext()) {
  const product = iterator.next();
  console.log(`Product: ${product.name}, Price: ${product.price}`);
}
