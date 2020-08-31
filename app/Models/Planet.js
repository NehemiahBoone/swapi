export default class Planet {
  constructor({ name, diameter, climate, terrain, population }) {
    this.name = name
    this.diameter = diameter
    this.climate = climate
    this.terrain = terrain
    this.population = population
  }

  get Template() {
    return `
    <div class='col-3'>
      <div class="card p-2 value">
          ${this.name} - ${this.diameter}
      </div>
    </div>
    `
  }
}