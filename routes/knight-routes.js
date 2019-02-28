let Knights = require('../Models/knight')
let router = require('express').Router()

router.get('', (req, res, next) => {
  Knights.find({})
    .then(knights => res.send(knights))
    .catch(err => res.status(400).send(err))
})


router.get('/:id', (req, res, next) => {
  Knights.findById(req.params.id).populate("kingdom")
    .then(knight => res.send(knight))
    .catch(err => res.status(400).send(err))
})


router.post('', (req, res, next) => {
  Knights.create(req.body)
    .then(knight => res.send(knight))
    .catch(err => res.status(400).send(err))
})

// router.put("/:id", async (req, res, next) => {
//   try {
//     let knight = await Knights.findByIdAndUpdate(req.params.id, req.body, { new: true })
//     res.send(knight)
//   } catch (err) {
//     res.status(400).send(err)
//   }
// })

router.put("/:id/quests", (req, res, next) => {
  Knights.findByIdAndUpdate(req.params.id, { $set: { quests: req.body.quests } }, { new: true })
    .then(knight => res.send(knight))
})

router.delete("/:id", (req, res, next) => {
  Knights.findByIdAndDelete(req.params.id)
    .then(() => res.send("cool story you killed the knight"))
    .catch(err => res.status(400).send(err))
})





exports.router = router
