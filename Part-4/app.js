const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const blogRouter = require('./controllers/blogs')
const {MONGODB_URI} = require('./utils/config')

const app = express()

console.log('connecting to MONGODB Atlas')

mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('connected to MONGODB Atlas')
    })
    .catch((err) => {
        console.error(err.message)
    })

// Middleware
app.use(cors())
app.use(express.json())

// Router
app.use('/api/blogs', blogRouter)

module.exports = app