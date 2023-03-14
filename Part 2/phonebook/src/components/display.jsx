import personService from '../services/persons'

const Button = ({id, name, getAllContact}) => {
  const handleClick = () => {
    const result = confirm(`Delete ${name} ?`)
    if (result) {
      personService.deleteOne(id)
    }
    getAllContact()
  }

  return (
    <button onClick={handleClick}>Delete</button>
  )
}

const Display = ({contact, getAllContact}) => {
  return (
    <div>
        {contact.map((person) => (
          <p key={person.id}>{ person.name } { person.number } <Button id={person.id} name={person.name} getAllContact={getAllContact}/></p>
        ))}
    </div>
  )
}

export default Display