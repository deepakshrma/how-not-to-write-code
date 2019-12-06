const Service = require("./Service");
class ClientWithoutInjection {
  constructor() {
    this.service = new Service();
  }
  greet() {
    return "Hello " + this.service.getName();
  }
}
class ClientWithInjection {
  constructor(service) {
    this.service = service;
  }
  greet() {
    console.log(this.service.getName);
    return "Hello " + this.service.getName();
  }
}
exports.ClientWithInjection = ClientWithInjection;
exports.ClientWithoutInjection = ClientWithoutInjection;
