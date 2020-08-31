import { ProxyState } from "../AppState.js"
import Planet from "../Models/Planet.js"
import { api } from "./AxiosService.js"

class PlanetsService {
  getPlanets() {
    api.get('planets')
      .then(result => {
        ProxyState.nextPlan = result.data.next
        ProxyState.planets = result.data.results.map(c => new Planet(c))
      })
      .catch(error => {
        console.error(error)
      })
  }

  previous() {
    if (ProxyState.previousPlan) {
      api.get(ProxyState.previousPlan)
        .then(result => {
          ProxyState.previousPlan = result.data.previous
          ProxyState.nextPlan = result.data.next
          ProxyState.planets = result.data.results.map(c => new Planet(c))
        })
        .catch(error => {
          console.error(error)
        })
    }
  }

  next() {
    if (ProxyState.nextPlan) {
      api.get(ProxyState.nextPlan)
        .then(result => {
          ProxyState.previousPlan = result.data.previous
          ProxyState.nextPlan = result.data.next
          ProxyState.planets = result.data.results.map(c => new Planet(c))
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
}

export const planetsService = new PlanetsService()