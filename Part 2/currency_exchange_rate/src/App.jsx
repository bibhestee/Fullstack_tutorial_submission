import axios from 'axios';
import { useEffect, useState } from 'react';


const App = () => {
  const [value, setValue] = useState('')
  const [data, setData] = useState('')
  const [currency, setCurrency] = useState(null)

  useEffect(() => {
    if (currency) {
      axios.get(`https://v6.exchangerate-api.com/v6/59a4c5fad105ae11b5a9eb1a/latest/${currency}`)
            .then(response => {
              setData(response.data.conversion_rates)
            })
      }
  }, [currency])
  
  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleClick = (event) => {
    event.preventDefault()
    setCurrency(value)
  }
  return (
    <div>
      <form onSubmit={handleClick}>
        Currency: <input value={value} onChange={handleChange}/>
        <button type='submit'>exchange rate</button>
      </form>
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  )
}

export default App