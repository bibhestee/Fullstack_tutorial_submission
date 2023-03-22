const mongoose = require('mongoose')

const MONGODB_URI = process.env.MONGODB_URI

mongoose.set('strictQuery', false)
mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('connected to MONGODB')
    })
    .catch(err => console.log('error connecting to MONGODB:', err.message))

// Create a schema
const personSchema = new mongoose.Schema({
    name: {
      type: String,
      minLength: 3,
      required: true
    },
    number: {
      type: String,
      minLength: 8,
      validate: {
        validator: (v) => {
          return /\d{2,3}-\d+/.test(v)
        },
        message: props => `${props.value} is not a valid phone number!`
      },
      required: true
    }
})

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

// Create a model
module.exports = mongoose.model('Person', personSchema)
