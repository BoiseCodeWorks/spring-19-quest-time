let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let quest = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  kingdom: { type: ObjectId, ref: "Kingdom", required: true },
})

module.exports = mongoose.model("Quest", quest)
