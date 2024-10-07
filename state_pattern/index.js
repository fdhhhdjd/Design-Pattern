// Lớp trạng thái của đơn hàng
class PendingState {
  handle(order) {
    console.log("Đơn hàng đang chờ xử lý.");
    order.setState(new ShippingState()); // Chuyển sang trạng thái đang vận chuyển
  }

  cancel(order) {
    console.log("Đơn hàng đã bị hủy khi đang chờ xử lý.");
    order.setState(new CancelledState());
  }
}

class ShippingState {
  handle(order) {
    console.log("Đơn hàng đang được vận chuyển.");
    order.setState(new DeliveredState()); // Chuyển sang trạng thái đã giao hàng
  }

  cancel(order) {
    console.log("Không thể hủy đơn hàng khi đang vận chuyển.");
  }
}

class DeliveredState {
  handle(order) {
    console.log("Đơn hàng đã được giao.");
  }

  cancel(order) {
    console.log("Không thể hủy đơn hàng đã được giao.");
  }
}

class CancelledState {
  handle(order) {
    console.log("Đơn hàng đã bị hủy.");
  }

  cancel(order) {
    console.log("Đơn hàng đã bị hủy trước đó.");
  }
}

class Order {
  constructor() {
    this.state = new PendingState(); // Trạng thái ban đầu là đang chờ xử lý
  }

  setState(state) {
    this.state = state;
  }

  process() {
    this.state.handle(this); // Xử lý đơn hàng dựa trên trạng thái hiện tại
  }

  cancel() {
    this.state.cancel(this); // Hủy đơn hàng dựa trên trạng thái hiện tại
  }
}

// Sử dụng State Pattern
const order = new Order();

order.process(); // Đơn hàng đang chờ xử lý -> Chuyển sang Đang vận chuyển
order.cancel(); // Không thể hủy đơn hàng khi đang vận chuyển
order.process(); // Đơn hàng đang được vận chuyển -> Chuyển sang Đã giao hàng
order.cancel(); // Không thể hủy đơn hàng đã được giao
