import personService from '../services/persons'

const Button = ({id, name, getAllContact, handleNotification}) => {
  const handleClick = () => {
    const result = confirm(`Delete ${name} ?`)
    if (result) {
      personService
        .deleteOne(id)
        .then(() => {
          const msg = `${name} deleted sucessfully!`
          handleNotification(msg, 'success')
          getAllContact()
        })
    }
  }

  return (
    <button onClick={handleClick}>Delete</button>
  )
}

const Display = ({contact, getAllContact, handleNotification}) => {
  return (
    <div>
        {contact.map((person) => (
          <p key={person.id}>{ person.name } { person.number } <Button id={person.id} name={person.name} getAllContact={getAllContact} handleNotification={handleNotification} /></p>
        ))}
    </div>
  )
}

export default Display