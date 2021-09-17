const express = require("express")

const server = express()

const CarsRouter = require("./cars/cars-router");




// server.use('/api/cars', CarsRouter)


server.get('/', (req, res) => {
    res.status(200).send("<h1>API RUNNING </h1>")
})

module.exports = server
