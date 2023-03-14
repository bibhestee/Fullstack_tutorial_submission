import { useState, useEffect  } from "react"
import Form from "./components/form"
import Display from "./components/display"
import Search from "./components/search"
import personService from './services/persons'

const App = () => {

  // INITIALIZE THE useState HOOKS
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [number, setNumber] = useState('')
  const [contact, setContact] = useState([])


  const getAllContact = () => {
    personService
      .getAll()
      .then(data => {
        setPersons(data)
        setContact(data)
      })
      .catch(e => {
        console.log(e)
      })
  }

  useEffect(() => {
    getAllContact()
  }, [])

  // Display contact based on the filter parameter
  const showContact = (event) => {
   if (event.target.value != '') {
        let newList = persons.filter((person) => {
        return person.name.toLowerCase().includes(event.target.value.toLowerCase()) === true
    })
      setContact(newList)
   }
    else {
      setContact(persons)
    }
  }

  // Extract data from name and number input
  const addPerson = (event) => {
    setNewName(event.target.value)
  }
  const addNumber = (event) => {
    setNumber(event.target.value)
  }

  // HANDLE BUTTON CLICK
  const handleClick = (event) => {
    event.preventDefault() 
    let found = false
    // Check if contact is already added to phonebook
    persons.forEach((user) => {
      if (user.name == newName) {
        const result = confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
        // Update the server db if user confirms the operation
        if (result) {
          personService
            .update(user.id, {...user, number: number})
            .catch(e => {
              console.log(e)
            })
        }
        getAllContact()
        found = true
      }
    })
    // Create a new contact if not existing
    if (found === false) {
      const newData = {name: newName, number: number, id: persons.len + 1}
      personService
        .create(newData)
        .then(data => setContact(contact.concat(data)))
        .catch(e => {
          console.log(e)
        })
      getAllContact()
    }
    setNewName('')
    setNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Search showContact={showContact} />
      <Form newName={newName} number={number} handleClick={handleClick} addNumber={addNumber} addPerson={addPerson} />
      <h2>Numbers</h2>
      <Display contact={contact} getAllContact={getAllContact}/>
    </div>
  )
}

export default App