const personRouter = require('express').Router()
const personRouterInfo = require('express').Router()
const Person = require('../models/person')

//ROUTERS - handles all the endpoints
// Home Endpoint - GET
personRouter.get('/', (req, res, next) => {
    Person.find({})
      .then(people => {
        res.json(people)
      })
      .catch(err => next(err))
});

// Info Endpoint - GET
/* This endpoint shows the time that the request was received 
 and how many entries are in the phonebook at the time of processing the request. */
personRouterInfo.get('/', (req, res, next) => {
    Person.find({})
      .then(people => {
          res.send(
            `<p>Phonebook has info for ${people.length} people</p>
            <p>${Date()}</p>`)
      })
      .catch(err => next(err))
})

// Single Phonebook Entry - GET
personRouter.get('/:id', (req, res, next) => {
   Person.findById(req.params.id)
    .then(person => {
        if (!person) {
          res.sendStatus(404).end()
        } else {
          res.json(person)
        }
    })
    .catch(err => next(err))
})

// Delete Single Entry Endpoint - Delete
personRouter.delete('/:id', (req, res, next) => {
    const id = req.params.id
    Person.findByIdAndRemove(id)
      .then(response => {
        res.sendStatus(204).end()
      })
      .catch(err => next(err))
})

// Create Phonebook Endpoint - POST
personRouter.post('/', (req, res, next) => {
    const person = req.body
    // Handles error if name/number is not specified
    if (!person.name || !person.number) {
        return res.status(400).json({
            error: 'name/number missing'
        })
    } 
    // Create new contact
    Person
      .create({name: person.name, number: person.number})
      .then(person => {
        res.json(person)
      })
      .catch(err => next(err))    
})

// Update Contact Endpoint
personRouter.put('/:id', (req, res, next) => {
    const id = req.params.id
    const person = {
      name: req.body.name,
      number: req.body.number
    }
    // add runValidators options to check if inputs are valid
    Person
      .findByIdAndUpdate(id, person, {new: true, runValidators: true, context: 'query'})
      .then(updatedPerson => {
        if (!updatedPerson) {
          res.sendStatus(400)
        } else {
          res.json(updatedPerson)
        }
      })
      .catch(err => next(err))
})

module.exports = {
    personRouter, personRouterInfo
}