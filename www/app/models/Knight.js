export default class Knight {
  constructor(data) {
    this._id = data._id
    this.name = data.name
    this.quests = data.quests
  }

  get Template() {
    return `
    <li>
      ${this.name}
    </li>
    `
  }

  getQuestTemplate(questId) {
    let buttonTemplate = ''
    if (this.quests.includes(questId)) {
      buttonTemplate = `<button type="button" onclick="app.controllers.kingdomController.leaveQuest('${this._id}', '${questId}')">Leave Quest</button>`
    } else {
      buttonTemplate = `<button type="button" onclick="app.controllers.kingdomController.joinQuest('${this._id}', '${questId}')">Join Quest</button>`
    }
    return `
      <li>
        ${this.name} ${buttonTemplate}
      </li>
    `
  }

}

