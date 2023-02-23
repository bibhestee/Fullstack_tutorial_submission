const Display = ({contact}) => {
  return (
    <div>
        {contact.map((person, i) => (
          <p key={i}>{ person.name } { person.number }</p>
        ))}
    </div>
  )
}

export default Display