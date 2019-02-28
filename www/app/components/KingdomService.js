import Kingdom from "../models/kingdom.js";
import Knight from "../models/Knight.js";
import Quest from "../models/Quest.js";

// @ts-ignore
let api = axios.create({
  baseURL: "/api"
})

let _state = {
  kingdoms: [],
  kingdom: {},
  knights: [],
  quests: [],
  quest: {}
}

let _subscribers = {
  kingdoms: [],
  kingdom: [],
  knights: [],
  quests: [],
  quest: []
}

function _setState(prop, val) {
  _state[prop] = val
  _subscribers[prop].forEach(fn => fn());
}

export default class KingdomService {
  get Kingdoms() {
    return _state.kingdoms.map(k => new Kingdom(k))
  }

  get Knights() {
    return _state.knights.map(k => new Knight(k))
  }

  get Quests() {
    return _state.quests.map(q => new Quest(q))
  }

  get Kingdom() {
    return new Kingdom(_state.kingdom)
  }

  get Quest() {
    return new Quest(_state.quest)
  }

  set Quest(id) {
    let quest = _state.quests.find(q => q._id == id)
    if (!quest) { return }
    _setState('quest', quest)
  }

  createQuest(quest) {
    api.post('quests', quest)
      .then(res => {
        _state.quests.push(res.data)
        _setState('quests', _state.quests)
      })
  }

  leaveQuest(knightId, questId) {
    let knight = _state.knights.find(k => k._id == knightId)
    knight.quests.splice(knight.quests.indexOf(questId), 1)
    this.Quest = questId
    this.updateKnight(knight)
  }

  joinQuest(knightId, questId) {
    let knight = _state.knights.find(k => k._id == knightId)
    knight.quests.push(questId)
    this.Quest = questId
    this.updateKnight(knight)
  }

  getKingdomDetails(id) {
    _setState('kingdom', _state.kingdoms.find(k => k._id == id))
    api.get('kingdoms/' + id + '/knights')
      .then(res => _setState('knights', res.data))
    api.get('kingdoms/' + id + '/quests')
      .then(res => _setState('quests', res.data))
  }

  updateKnight(knight) {
    api.put(`/knights/${knight._id}/quests`, knight)
      .then(res => console.log(res.data))
  }

  /**
   * @param {string} prop
 * @param {Function} fn
 */
  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }

  constructor() {
    api.get('kingdoms')
      .then(res => {
        _setState("kingdoms", res.data)
      });
  }
}