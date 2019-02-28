export default class Kingdom {
  constructor(data) {
    this._id = data._id
    this.name = data.name
  }

  get Template() {
    return `
    <div class="kingdom">
      <h4 class="action"
      onclick="app.controllers.kingdomController.getKingdomDetails('${this._id}')"
      >${this.name}</h4>
    </div>
    `
  }

}

