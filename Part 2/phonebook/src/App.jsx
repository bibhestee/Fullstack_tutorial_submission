import { useState, useEffect  } from "react"
import axios from 'axios'
import Form from "./components/form"
import Display from "./components/display"
import Search from "./components/search"

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [number, setNumber] = useState('')
  let [contact, setContact] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3000/persons')
      .then(response => {
        const names = response.data
        setPersons(names)
      })
  }, [])

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
    found ? '' : setPersons(persons.concat({name: newName, number: number, id: persons.length}))
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