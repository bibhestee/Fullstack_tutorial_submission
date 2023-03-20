import { useState, useEffect  } from "react"
import Form from "./components/form"
import Display from "./components/display"
import Search from "./components/search"
import Notification from "./components/notification"
import personService from './services/persons'

const App = () => {

  // INITIALIZE THE useState HOOKS
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [number, setNumber] = useState('')
  const [contact, setContact] = useState([])
  const [message, setMessage] = useState(null)


  const getAllContact = () => {
    personService
      .getAll()
      .then((response) => {
        const data = response.sort((a, b) => {
              const nameA = a.name.toUpperCase(); // ignore upper and lowercase
              const nameB = b.name.toUpperCase(); // ignore upper and lowercase
              if (nameA < nameB) {
                return -1
              }
              if (nameA > nameB) {
                return 1
              }
              // names must be equal
              return 0
            })
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

  const handleNotification = (msg, type) => {
    setMessage({msg: msg, type: type})
              setTimeout(() => {
                setMessage(null)
              }, 5000)
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
            .then(() => {
              const msg = `${newName} number is successfully update to ${number}`
              handleNotification(msg, 'success')
              getAllContact()
            })
            .catch(e => {
              const msg = `Information of ${newName} has already been removed from server`
              handleNotification(msg, 'error')
            })
        }
       
        found = true
      }
    })
    // Create a new contact if not existing
    if (found === false) {
      const newData = {name: newName, number: number, id: persons.len + 1}
      personService
        .create(newData)
        .then((data) => {
          getAllContact()
          const msg = `Added ${newData.name}`
          handleNotification(msg, 'success')
          
        })
        .catch(e => {
          const msg = `Can't create ${newData.name}: ${e.message}`
          handleNotification(msg, 'error')
        })
    }
    setNewName('')
    setNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Search showContact={showContact} />
      <Form newName={newName} number={number} handleClick={handleClick} addNumber={addNumber} addPerson={addPerson} />
      <h2>Numbers</h2>
      <Display contact={contact} getAllContact={getAllContact} handleNotification={handleNotification} />
    </div>
  )
}

export default App