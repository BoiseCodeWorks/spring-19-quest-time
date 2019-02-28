import KingdomController from "./components/KingdomController.js";

class App {
  constructor() {
    this.controllers = {
      kingdomController: new KingdomController()
    }
  }
}

window["app"] = new App()