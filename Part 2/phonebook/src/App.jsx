import { useState, useEffect  } from "react"
import Form from "./components/form"
import Display from "./components/display"
import Search from "./components/search"
import personService from './services/persons'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [number, setNumber] = useState('')
  let [contact, setContact] = useState([])
 
  useEffect(() => {
    personService
      .getAll()
      .then(data => {
        setPersons(data)
      })
  }, [persons])

  const showContact = (event) => {
   if (event.target.value != '') {
        let newList = persons.filter((person) => {
        return person.name.toLowerCase().includes(event.target.value.toLowerCase()) === true
    })
      console.log(newList)
      setContact(newList)
   }
    else {
      setContact(persons)
    }
  }

  const addPerson = (event) => {
    setNewName(event.target.value)
  }

  const addNumber = (event) => {
    setNumber(event.target.value)
  }

  const handleClick = (event) => {
    event.preventDefault()
    let found = false
    persons.forEach((person) => {
      if (person.name == newName) {
        alert(`${newName} is already added to phonebook`)
        found = true
      }
    })
    const newData = {name: newName, number: number, id: persons.length + 1}
    found ? '' : personService.create(newData); setPersons(persons.concat(newData))
    setNewName('')
    setNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Search showContact={showContact} />
      <Form newName={newName} number={number} handleClick={handleClick} addNumber={addNumber} addPerson={addPerson} />
      <h2>Numbers</h2>
      <Display contact={contact} />
    </div>
  )
}

export default App