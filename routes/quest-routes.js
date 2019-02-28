let Quests = require('../Models/quest')
let router = require('express').Router()

router.get('', (req, res, next) => {
  Quests.find({})
    .then(quests => res.send(quests))
    .catch(err => res.status(400).send(err))
})


router.get('/:id', (req, res, next) => {
  Quests.findById(req.params.id).populate("kingdom")
    .then(quest => res.send(quest))
    .catch(err => res.status(400).send(err))
})


router.post('', (req, res, next) => {
  Quests.create(req.body)
    .then(quest => res.send(quest))
    .catch(err => res.status(400).send(err))
})

router.put("/:id", async (req, res, next) => {
  try {
    let quest = await Quests.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.send(quest)
  } catch (err) {
    res.status(400).send(err)
  }
})

router.delete("/:id", (req, res, next) => {
  Quests.findByIdAndDelete(req.params.id)
    .then(() => res.send("cool story you killed the quest"))
    .catch(err => res.status(400).send(err))
})





exports.router = router
