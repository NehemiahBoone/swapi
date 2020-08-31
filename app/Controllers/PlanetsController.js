import { ProxyState } from "../AppState.js"
import { planetsService } from "../Services/PlanetsService.js"

function _draw() {
  let plnts = ProxyState.planets
  let template = ''
  plnts.forEach(p => template += p.Template)
  document.getElementById('planets').innerHTML = template
}


export default class PlanetsController {
  constructor() {
    ProxyState.on('planets', _draw)
    planetsService.getPlanets()
  }

  previous() {
    planetsService.previous()
  }

  next() {
    planetsService.next()
  }
}