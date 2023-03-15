import { useEffect, useState } from "react"
import axios from 'axios'
import Display from "./components/Display"

const App = () => {
  /**
   * App - Main App component
   * 
   * Components: 
   *    Display
   * 
   * @data: Store the countries fetched from api
   * @countries: Store the filtered countries
   * 
   * @returns: App Component
   */
  const [data, setData] = useState([])
  const [countries, setCountries] = useState([]) 

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