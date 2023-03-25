const express = require('express');
const mongoose = require('mongoose')
const morgan = require('morgan');
const cors = require('cors');
const config = require('./utils/config')
const {info, error} = require('./utils/logger')
const {personRouter, personRouterInfo} = require('./controllers/persons')
const {requestLogger, unknownEndpoint, errorHandler} = require('./utils/middleware')

const app = express()

// Connect to MongoDB
mongoose.set('strictQuery', false)

info('connecting to MongoDB Atlas')

mongoose.connect(config.MONGODB_URI)
    .then(() => {
        info('connected to MONGODB')
    })
    .catch(err => error('error connecting to MONGODB:', err.message))

// Create new token - Logging of Post request datas
morgan.token('data', (req, res) => {return JSON.stringify(req.body)})

// Middlewares
app.use(express.json())
app.use(express.static('dist'))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :data'))
app.use(requestLogger)
app.use(cors()) // Cors Allows request from All origins i.e FE-3000 , BE-3001 ✔

// Router '/api/persons'
app.use('/api/persons', personRouter)
app.use('/info', personRouterInfo)

// Middlewares
app.use(unknownEndpoint)
app.use(errorHandler)

module.exports = app