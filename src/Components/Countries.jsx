import React, { useEffect, useState } from 'react'

function Countries() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null)
    const [allCountries, setAllCountries] = useState([]);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(
            (data) => {
                setIsLoaded(true);
                setAllCountries(data)
            },
            (error) => {
                setIsLoaded(true)
                setError(error)
            }
        )
        },[])

    console.log(allCountries[1])

    

    let startIndex = 0;
    let endIndex = 16;
    let subset = allCountries.slice(startIndex, endIndex)

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className='container'>
                {subset.map(country => (
                <div>
                <img src={country.flags.png} alt='countryflag'/>
                <h3 key={country.car.cca2}>
                    {country.name.common} 
                </h3>
                </div>
                ))}
            </div>
            
        );
    }
}
export default Countries