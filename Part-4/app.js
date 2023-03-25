require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const blogRouter = require('./controllers/blogs')

const app = express()

const mongoUrl = process.env.MONGODB_URI
mongoose.connect(mongoUrl)
    .then(() => {
        console.log('connected to db')
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