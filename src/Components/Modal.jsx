import React from "react";

function Modal({ popupState, onClose, countryData }) {
  if (!popupState) return null;

  function numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  return (
    <div onClick={onClose} className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <div className="modalLeft">
          <img src={countryData.flags.png} alt="countryflag" />
        </div>
        <div className="modalRight">
          <p className="closeBtn" onClick={onClose}>
            X
          </p>
          <div className="content">
            <h1>{countryData.name.common}</h1>
            <h3>Official name: {countryData.name.official}</h3>
            <h3>Continent: {countryData.continents}</h3>
            <h3>Capital: {countryData.capital}</h3>
            <h3>Population: {numberWithCommas(countryData.population)}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
