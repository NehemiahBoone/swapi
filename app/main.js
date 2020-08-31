import CharactersController from "./Controllers/CharactersController.js";
import PlanetsController from "./Controllers/PlanetsController.js"

class App {
  constructor() {
    this.charactersController = new CharactersController();
    this.planetsController = new this.planetsController()
  }
}

window["app"] = new App();
