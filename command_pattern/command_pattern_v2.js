// Lớp đại diện cho yêu cầu (command)
class OrderCommand {
  constructor(order) {
    this.order = order;
  }

  execute() {
    // Mặc định, không làm gì cả
  }
}
// Lớp đại diện cho yêu cầu gửi đơn hàng
class ShipOrderCommand extends OrderCommand {
  execute() {
    console.log(`Shipping order: ${this.order}`);
    // Code để thực hiện việc gửi đơn hàng
  }
}

// Lớp đại diện cho yêu cầu hủy đơn hàng
class CancelOrderCommand extends OrderCommand {
  execute() {
    console.log(`Canceling order: ${this.order}`);
    // Code để thực hiện việc hủy đơn hàng
  }
}

// Lớp quản lý yêu cầu (command)
class CommandManager {
  constructor() {
    this.commands = [];
  }

  addCommand(command) {
    this.commands.push(command);
  }

  executeCommands() {
    for (const command of this.commands) {
      command.execute();
    }
    this.commands = [];
  }
}

// Sử dụng Command Pattern
const commandManager = new CommandManager();

const order1 = "ORDER123";
const order2 = "ORDER456";

const shipOrderCommand1 = new ShipOrderCommand(order1);
const shipOrderCommand2 = new ShipOrderCommand(order2);
const cancelOrderCommand = new CancelOrderCommand(order2);

commandManager.addCommand(shipOrderCommand1);
commandManager.addCommand(shipOrderCommand2);
commandManager.addCommand(cancelOrderCommand);

commandManager.executeCommands();
