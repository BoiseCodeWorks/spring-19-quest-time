let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let knight = new Schema({
  name: { type: String, required: true },
  kingdom: { type: ObjectId, ref: "Kingdom", required: true },
  quests: [{ type: ObjectId, ref: "Quest" }]
})


/**
 * [questId][knightId]
 * 1,5
 * 1,2
 * 1,1
 * 2,1
 */



module.exports = mongoose.model("Knight", knight)
