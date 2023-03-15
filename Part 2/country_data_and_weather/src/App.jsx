import { useEffect, useState } from "react"
import axios from 'axios'
import Display from "./components/Display"

const App = () => {
  const [data, setData] = useState([]) // Store the countries fetch from api
  const [countries, setCountries] = useState([]) // Store the filtered countries

  useEffect(()=> {
    axios.get('https://restcountries.com/v3.1/all')
      .then(res => {
       setData(res.data) 
      })

  }, [])
 
  const handleChange = (event) => {
    // Filter the country by name based on input by user
    const newList = data.filter((country) => {
      return country.name.common.toLowerCase().includes(event.target.value) === true
    })
    setCountries(newList)
  }

  return (
    <div>
      Find countries <input onChange={handleChange} />
      <Display countries={countries} />
    </div>
  )
}

export default App