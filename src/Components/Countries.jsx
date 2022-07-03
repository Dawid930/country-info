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

    

    let startIndex = 200;
    let endIndex = 216;
    let subset = allCountries.slice(startIndex, endIndex)
    
    const onClickHandler = () => {
        setPopup(true)
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className='container'>
                {subset.map((country, i) => (
                <div className='country' key={i}>
                    <img src={country.flags.png} alt='countryflag'/>
                    <h3>
                    {country.name.common}
                    </h3>
                    <button className='button' onClick={onClickHandler}>Read more</button>
                    <Modal
                        open={i}
                        popupState={popup}
                        onClose={() => setPopup(false)}
                        countryData={country}/>
                </div>
                ))}
            </div>
            
        );
    }
}
export default Countries