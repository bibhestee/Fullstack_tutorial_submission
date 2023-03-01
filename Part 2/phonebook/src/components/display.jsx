const Display = ({contact}) => {
  return (
    <div>
        {contact.map((person) => (
          <p key={person.id}>{ person.name } { person.number }</p>
        ))}
    </div>
  )
}

export default Display