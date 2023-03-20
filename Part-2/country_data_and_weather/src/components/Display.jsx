import { useState } from "react"
import Show from "./Show"


const Display = ({countries}) => {
    /**
     * Display - Shows the filtered country
     * 
     * @countries: List of countries
     * @manyMatches: Func - filtered countries more than 10
     * 
     * @returns Display Component
     */
    const [index, setIndex] = useState(-1)
    const [btnClicked, setBtnClicked] = useState(false)

    const manyMatches = () => {
        return <div>Too many matches, specify another filter</div>
    }

    const handleClick = (event) => {
        setIndex(event.target.value)
        setBtnClicked(true)
        // Fade out the country information
        setTimeout(() => {
            setBtnClicked(false)
        }, 10000); 
    }

    const lessMatches = () => {
        // Render 1 item if length is 1
        if (countries.length == 1 ) {
            return (<Show country={countries[0]} />)
        }
   
        // Render 10 or less items
        if (countries.length > 1) {
            return (
                <>
                    {countries.map((country, i) => (
                        <div key={i}>{ country.name.common } <button onClick={handleClick} value={i}>show</button></div>
                    ))}
                    {/* Show the country information when btn is clicked and fade out after 5secs*/}
                    {btnClicked ? <Show country={countries[index]}/> : '' }
                </>
            )
        }
    }



  return (
    <>
        {countries.length <= 10 ? lessMatches() : manyMatches()}
    </>
  )
}

export default Display