const express = require("express")
const cors = require("cors")

const server = express()

// Routers
const routerAuth = require("./routes/auth.route")
const routerUser = require("./routes/user.route")
const routerPost = require("./routes/post.route")  //Eliminar
// Middlewares
server.use(cors())
server.use(express.json())


server.use("/auth", routerAuth)
server.use("/users", routerUser)
server.use("/posts", routerPost) //Eliminar

module.exports = server