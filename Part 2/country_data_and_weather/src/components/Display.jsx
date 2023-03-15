const Display = ({countries}) => {
    
    const manyMatches = () => {
        return <div>Too many matches, specify another filter</div>
    }

    const lessMatches = () => {
        // Render 1 item if length is 1
        if (countries.length == 1 ) {
            const name = countries[0].name.common
            const capital = countries[0].capital[0]
            // Object.values(obj) returns the obj values as an Array
            const lang = Object.values(countries[0].languages)
            const flag = countries[0].flags
            const area = countries[0].area
            return (
                <>
                    <h1>{name}</h1>
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
                </>
            )
        }
       
        // Render 10 or less items
        if (countries.length > 1) {
            return (
                <>
                    {countries.map((country, i) => (
                        <div key={i}>{ country.name.common }</div>
                    ))}
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