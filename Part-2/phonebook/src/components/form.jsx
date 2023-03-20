const Form = ({newName, number, handleClick, addNumber, addPerson}) => {
  return (
    <div>
        <form>
        <h2>Add a new</h2>
        <div>
          name: <input value={newName} onChange={addPerson}/>
        </div>
        <div>
          number: <input value={number} onChange={addNumber}/>
        </div>
        <div>
          <button type="submit" onClick={handleClick}>add</button>
        </div>
      </form>
    </div>
  )
}

export default Form