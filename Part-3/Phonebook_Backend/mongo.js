const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('Password is required!')
    process.exit(1)
}

const pwd = process.argv[2]

const url = `mongodb+srv://Bibest:${pwd}@cluster0.3mw1rpy.mongodb.net/Phonebook?retryWrites=true&w=majority`

mongoose.set('strictQuery', false)
mongoose.connect(url).catch(err => {
    console.log('DB not connected')
    process.exit(1)
})

// Create a schema
const personSchema = new mongoose.Schema({
    name: String,
    number: String
})

// Create a model
const Person = mongoose.model('Person', personSchema)

// Create an instance if name and number is passed as argument
if (process.argv.length === 5) {
    const newPerson = new Person({
        name: process.argv[3],
        number: process.argv[4]
    })
    newPerson.save().then(person => {
        console.log(`added ${person.name} number ${person.number} to phonebook`)
        // Always close the connection
        mongoose.connection.close()
        process.exit(1)
    })
}
// Print all the contacts from the DB
Person.find({}).then(result => {
    console.log('phonebook:')
    result.forEach(person => {
        console.log(`${person.name} ${person.number}`)
    })
    mongoose.connection.close()
})
// Always close the connection
