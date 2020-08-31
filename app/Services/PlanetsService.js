import { ProxyState } from "../AppState.js"
import Planet from "../Models/Planet.js"
import { api } from "./AxiosService.js"

class PlanetsService {
  getPlanets() {
    api.get('planets')
      .then(result => {
        ProxyState.planets = result.data.results.map(c => new Planet(c))
      })
      .catch(error => {
        console.error(error)
      })
  }
}

export const planetsService = new PlanetsService()