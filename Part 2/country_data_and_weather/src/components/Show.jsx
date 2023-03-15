import {useState, useEffect } from 'react'
import axios from 'axios'

const Show = ({country}) => {
    /**
     * Show - shows the information of each country passed as argument.
     * 
     * @country: country object
     * @name_: name of the country
     * @capital: capital of the country(1st capital)
     * @lang: languages spoken in the country
     * @flag: country flag
     * @area: country aread size 
     * @w_icon: weather icon
     * @w_cond: weather description
     * @temp: city temperature
     * @wind: city wind speed
     * 
     * @returns Show Component
     */

    const [weather, setWeather] = useState({})
    const [data, setData] = useState([])
    const [found, setFound] = useState(true)

    // Weather api key - Vite doesn't provide polyfill for process.env
    const api_key = import.meta.env.VITE_WEATHER_API_ENV
    

    useEffect(() => {
        const [lat, lon] = country.latlng
        const BaseUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`
        axios.get(BaseUrl)
            .then(res => {
                setFound(true)
                setWeather(res.data.weather[0])
                setData([res.data.main.temp, res.data.wind.speed])
            })
            .catch(err => {
                console.error(err)
                setFound(false)
            })
    }, [])
    
    // Object.values(obj) returns the obj values as an Array
    const lang = Object.values(country.languages)

    const name_ = country.name.common
    const capital = country.capital.length < 1 ? country.capital[0] : country.capital
    const flag = country.flags
    const area = country.area
    const w_icon = weather.icon
    const w_cond = weather.description
    const [temp, wind] = data

    const showWeather = () => {
        return (
            <>
                <h2>Weather in {capital} </h2> 
                <p>Temperature  {temp} Celcius</p>
                <img src={`https://openweathermap.org/img/wn/${w_icon}@2x.png`} alt={w_cond} />
                <p>Wind {wind} m/s</p>
            </>
        )
    }


  return (
    <>
        <h1>{name_}</h1>
        <div>
            <div>Capital {capital}</div>
            <div>Area {area}</div>
        </div>
        <div>
            <h3>Languages:</h3>
            <ul>
                {lang.map((item, i) => (
                    <li key={i}>{ item }</li>
                ))}
            </ul>
        </div>
        <div>
            <img src={flag.png} alt={flag.alt} />
        </div>
        <div>
           {found && showWeather()}
        </div>
    </>
  )
}

export default Show