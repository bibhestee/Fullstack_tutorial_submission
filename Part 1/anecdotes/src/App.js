import { useState } from "react"

const Button = (props) => {
  return <button onClick={props.handleClick}>{ props.text }</button>
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length + 1).fill(0))

  const votes = [...points]

  const selectNext = () => {
    const random = Math.floor(Math.random() * (anecdotes.length - 1))
    setSelected(random)
  }

  const updateVote = () => {
    votes[selected] += 1
    setPoints(votes)
  }
  
  const mostVote = () => {
    const max = Math.max(...votes)
    const index = votes.indexOf(max)
    return (index)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>
        {anecdotes[selected]}
        <div>has {points[selected]} votes</div>
      </div>
      <Button handleClick={updateVote} text='vote' />
      <Button handleClick={selectNext} text='next anecdote' />
      <h1>Anecdote with most votes</h1>
      <div>{ anecdotes[mostVote()] }</div>
      <span>has { points[mostVote()] } votes</span>
    </div>
  )
}

export default App