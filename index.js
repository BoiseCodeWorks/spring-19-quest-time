let express = require('express')
let bodyParser = require('body-parser')
let server = express()
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))
require('./db/gearhost-config')

server.use(express.static(__dirname + "/www"))

let knightRoutes = require('./routes/knight-routes')
let kingdomRoutes = require('./routes/kingdom-routes')
let questRoutes = require('./routes/quest-routes')


server.use('/api/knights', knightRoutes.router)
server.use('/api/kingdoms', kingdomRoutes.router)
server.use('/api/quests', questRoutes.router)








server.listen(3000, () => { console.log("serving") })