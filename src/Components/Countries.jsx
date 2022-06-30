import React, { useEffect, useState } from 'react'
import Modal from './Modal';

function Countries() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null)
    const [allCountries, setAllCountries] = useState([]);
    const [popup, setPopup] = useState(false)

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
                {subset.map((country, i) => (
                <div onClick={() => 
                    setPopup(true)}>
                    <img src={country.flags.png} alt='countryflag'/>
                    <h3 key={i}>
                    {country.name.common} 
                    </h3>
                    <Modal
                        open={popup}
                        onClose={() => setPopup(false)}
                        countryData={country}/>
                </div>
                ))}
            </div>
            
        );
    }
}
export default Countries