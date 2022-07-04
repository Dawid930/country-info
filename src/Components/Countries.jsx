import React, { useEffect, useState } from "react";
import Modal from "./Modal";

function Countries() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [allCountries, setAllCountries] = useState([]);
  const [popup, setPopup] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setAllCountries(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  let startIndex = 200;
  let endIndex = 216;
  let subset = allCountries.slice(startIndex, endIndex);

  const createHandlerForCountry = (country) => () => {
    setSelectedCountry(country);
    setPopup(true);
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="container">
        {subset.map((country) => (
          <div className="country" key={country.name.common}>
            <img src={country.flags.png} alt="countryflag" />
            <h3>{country.name.common}</h3>
            <button
              className="button"
              onClick={createHandlerForCountry(country)}
            >
              Read more
            </button>
          </div>
        ))}
        <Modal
          popupState={popup}
          onClose={() => setPopup(false)}
          countryData={selectedCountry}
        />
      </div>
    );
  }
}
export default Countries;
