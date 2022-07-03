import React from 'react'

function Modal({popupState, onClose, countryData, open}) {
    if(!popupState) return null
  if(open)  
  return (
    <div onClick={onClose} className='overlay'>
    <div onClick={(e) => {
        e.stopPropagation();
      }}
      className='modalContainer'
    >
      <div className='modalRight'>
        <p className='closeBtn' onClick={onClose}>
          X
        </p>
        <div className='content'>
          <h1>Name: {countryData.name.common}</h1>
          <h3>Population: {countryData.population}</h3>
          <h3>Capital: {countryData.capital}</h3>
          <h3>Continent: {countryData.continents}</h3>
        </div>
      </div>
    </div>
  </div>
);
}

export default Modal