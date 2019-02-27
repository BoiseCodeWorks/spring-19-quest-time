let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let knight = new Schema({
  name: { type: String, required: true },
  kingdom: { type: ObjectId, ref: "Kingdom", required: true }
})

module.exports = mongoose.model("Knight", knight)
