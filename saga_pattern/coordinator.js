class SagaCoordinator {
  constructor() {
    this.state = new BasketState(this);
    this.orderData = {};
  }

  changeState(state) {
    this.state = state;
  }

  async start(data) {
    this.orderData = data;
    try {
      await this.state.execute();
    } catch (error) {
      console.error("Saga failed, rolling back:", error.message);
      await this.rollback();
      throw new Error("Saga failed and rollback executed");
    }
  }

  async rollback() {
    await this.state.rollback();
  }
}

class BasketState {
  constructor(coordinator) {
    this.coordinator = coordinator;
  }

  async execute() {
    console.log("Adding items to basket");
    // Simulate async operation and potential failure
    setTimeout(async () => {
      try {
        this.coordinator.changeState(new OrderState(this.coordinator));
        await this.coordinator.start(this.coordinator.orderData);
      } catch (error) {
        throw new Error("Failed to add items to basket");
      }
    }, 1000);
  }

  async rollback() {
    console.log("Rolling back basket");
    // Implement rollback logic if necessary
  }
}

class OrderState {
  constructor(coordinator) {
    this.coordinator = coordinator;
  }

  async execute() {
    console.log("Creating order");
    // Simulate async operation and potential failure
    setTimeout(async () => {
      try {
        this.coordinator.changeState(new PaymentState(this.coordinator));
        await this.coordinator.start(this.coordinator.orderData);
      } catch (error) {
        throw new Error("Failed to create order");
      }
    }, 1000);
  }

  async rollback() {
    console.log("Rolling back order");
    // Implement rollback logic if necessary
  }
}

class PaymentState {
  constructor(coordinator) {
    this.coordinator = coordinator;
  }

  async execute() {
    console.log("Processing payment");
    // Simulate async operation and potential failure
    setTimeout(async () => {
      try {
        this.coordinator.changeState(new ShippingState(this.coordinator));
        await this.coordinator.start(this.coordinator.orderData);
      } catch (error) {
        throw new Error("Failed to process payment");
      }
    }, 1000);
  }

  async rollback() {
    console.log("Rolling back payment");
    // Implement rollback logic if necessary
  }
}

class ShippingState {
  constructor(coordinator) {
    this.coordinator = coordinator;
  }

  async execute() {
    console.log("Shipping order");
    // Simulate async operation and potential failure
    setTimeout(async () => {
      try {
        this.coordinator.changeState(new NotificationState(this.coordinator));
        await this.coordinator.start(this.coordinator.orderData);
      } catch (error) {
        throw new Error("Failed to ship order");
      }
    }, 1000);
  }

  async rollback() {
    console.log("Rolling back shipping");
    // Implement rollback logic if necessary
  }
}

class NotificationState {
  constructor(coordinator) {
    this.coordinator = coordinator;
  }

  async execute() {
    console.log("Sending notification");
    // Simulate async operation and potential failure
    setTimeout(async () => {
      try {
        console.log("Saga completed successfully");
      } catch (error) {
        throw new Error("Failed to send notification");
      }
    }, 1000);
  }

  async rollback() {
    console.log("Rolling back notification");
    // Implement rollback logic if necessary
  }
}

const coordinator = new SagaCoordinator();
coordinator
  .start({ userId: "user1", items: ["item1", "item2"] })
  .catch((error) => console.error(error.message));
