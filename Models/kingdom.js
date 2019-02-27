let mongoose = require('mongoose')
let Knights = require('./knight')
let Schema = mongoose.Schema

let kingdom = new Schema({
  name: { type: String, required: true },
  knights: { type: Schema.Types.ObjectId, ref: "Knight", virtual: true }
})


kingdom.pre("remove", function (next) {
  Knights.remove({ kingdom: this._id })
    .then(() => next())
    .catch(err => next(err))
})


module.exports = mongoose.model("Kingdom", kingdom)
