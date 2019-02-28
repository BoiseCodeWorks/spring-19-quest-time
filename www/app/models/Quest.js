export default class Quest {
  constructor(data) {
    this._id = data._id
    this.name = data.name
    this.description = data.description
  }

  get Template() {
    return `
    <li onclick="app.controllers.kingdomController.changeQuest('${this._id}')">
      ${this.name}
    </li>
    `
  }

  get DetailedTemplate() {
    return `
    <div>
      <h4>${this.name}</h4>
      <p>${this.description}</p>
    </div>
    `
  }

}

