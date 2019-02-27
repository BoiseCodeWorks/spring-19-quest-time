let express = require('express')
let bodyParser = require('body-parser')
let server = express()
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))
require('./db/gearhost-config')


let knightRoutes = require('./routes/knight-routes')
let kingdomRoutes = require('./routes/kingdom-routes')


server.use('/api/knights', knightRoutes.router)
server.use('/api/kingdoms', kingdomRoutes.router)








server.listen(3000, () => { console.log("serving") })