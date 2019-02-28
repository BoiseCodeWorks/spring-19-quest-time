import KingdomService from "./KingdomService.js";
let kingdomsElem = document.getElementById('kingdoms')
let kingdomElem = document.getElementById('kingdom')
let kingdomNameElem = document.getElementById('kingdom-name')
let knightsElem = document.getElementById('knights')
let questsElem = document.getElementById('quests')
let questElem = document.getElementById('active-quest')

let _ks = new KingdomService()

function drawKingdoms() {
  let template = ''
  _ks.Kingdoms.forEach(k => template += k.Template)
  kingdomsElem.innerHTML = template
}

function drawKnights() {
  kingdomElem.classList.remove('hidden')
  kingdomsElem.innerHTML = ''
  let template = ''
  _ks.Knights.forEach(k => template += k.Template)
  knightsElem.innerHTML = template
  kingdomNameElem.textContent = _ks.Kingdom.name
}

function drawQuests() {
  kingdomElem.classList.remove('hidden')
  kingdomsElem.innerHTML = ''
  let template = ''
  _ks.Quests.forEach(k => template += k.Template)
  questsElem.innerHTML = template
  kingdomNameElem.textContent = _ks.Kingdom.name
}

function drawQuest() {
  questElem.innerHTML = _ks.Quest.DetailedTemplate
}

function drawQuestKnights() {
  let template = ''
  _ks.Knights.forEach(k => template += k.getQuestTemplate(_ks.Quest._id))
  knightsElem.innerHTML = template
  kingdomNameElem.textContent = _ks.Kingdom.name
}



export default class KingdomController {
  constructor() {
    _ks.addSubscriber("kingdoms", drawKingdoms)
    _ks.addSubscriber("knights", drawKnights)
    _ks.addSubscriber("quests", drawQuests)
    _ks.addSubscriber("quest", drawQuest)
    _ks.addSubscriber("quest", drawQuestKnights)
  }

  getKingdomDetails(id) {
    _ks.getKingdomDetails(id)
  }

  createQuest(e) {
    e.preventDefault()
    let form = e.target
    let quest = {
      kingdom: _ks.Kingdom._id,
      name: form.name.value,
      description: form.description.value
    }
    _ks.createQuest(quest)
    form.reset()
  }

  changeQuest(id) {
    _ks.Quest = id
  }

  joinQuest(knightId, questId) {
    _ks.joinQuest(knightId, questId)
  }

  leaveQuest(knightId, questId) {
    _ks.leaveQuest(knightId, questId)
  }
}