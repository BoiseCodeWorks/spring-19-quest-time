let Kingdoms = require('../Models/kingdom')
let Knights = require('../Models/knight')
let Quests = require('../Models/quest')
let router = require('express').Router()

router.get('', (req, res, next) => {
  Kingdoms.find({})
    .then(kingdoms => res.send(kingdoms))
    .catch(err => res.status(400).send(err))
})


router.get('/:id', (req, res, next) => {
  Kingdoms.findById(req.params.id)
    .then(kingdom => res.send(kingdom))
    .catch(err => res.status(400).send(err))
})

router.get('/:id/knights', (req, res, next) => {
  Knights.find({ kingdom: req.params.id }).populate('kingdom')
    .then(knights => res.send(knights))
    .catch(err => res.status(400).send(err))
})

router.get('/:id/quests', (req, res, next) => {
  Quests.find({ kingdom: req.params.id })
    .then(quests => res.send(quests))
    .catch(err => res.status(400).send(err))
})

router.post('', (req, res, next) => {
  Kingdoms.create(req.body)
    .then(kingdom => res.send(kingdom))
    .catch(err => res.status(400).send(err))
})

router.put("/:id", async (req, res, next) => {
  try {
    let kingdom = await Kingdoms.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.send(kingdom)
  } catch (err) {
    res.status(400).send(err)
  }
})

router.delete("/:id", (req, res, next) => {
  Kingdoms.findByIdAndDelete(req.params.id)
    .then(() => res.send("cool story you killed the kingdom"))
    .catch(err => res.status(400).send(err))
})


module.exports = { router }
