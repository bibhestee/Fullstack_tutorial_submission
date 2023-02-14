import { useState } from 'react'

const StatisticLine = (props) => {
  return <tr> 
    <td>{ props.text }</td>
    <td>{ props.value }</td>
  </tr>
}

const Statistics = (props) => {
    return (
        <div>
          <table>
            <tbody>
              <StatisticLine text="good" value={props.stat.good.toString()} />
              <StatisticLine text="neutral" value={props.stat.neutral.toString()} />
              <StatisticLine text="bad" value={props.stat.bad.toString()} />
              <StatisticLine text="all" value={props.stat.all.toString()} />
              <StatisticLine text="average" value={props.stat.average.toString()} />
              <StatisticLine text="positive" value={props.stat.positive.toString() + ' %'} />
            </tbody>
          </table>
        </div>
    )
}

const Button = (props) => {
    return <button onClick={props.handleClick}>{props.text}</button>
}

function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)


  // Functions to increment the values of stat comp
  const clickGood = () => {
    setGood(good + 1)
    setAll(all + 1)
    setAverage((good - bad) / all)
    setPositive((good / all) * 100)
  }

  const clickNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
    setAverage((good - bad) / all)
    setPositive((good / all) * 100)
  }

  const clickBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
    setAverage((good - bad) / all)
    setPositive((good / all) * 100)
  }

  const stat = {
    good: good,
    neutral: neutral,
    bad: bad,
    all: all,
    average: average,
    positive: positive
  }

  return (
    <div>
        <h1>give feedback</h1>
      <div>
        <Button handleClick={clickGood} text='good' />
        <Button handleClick={clickNeutral} text='neutral' />
        <Button handleClick={clickBad} text='bad' />
      </div>
      <div>
        <h1>statistics</h1>
          {!all? 'No feedback given': <Statistics stat={stat}/>}
      </div>
    </div>
  )
}

export default App
