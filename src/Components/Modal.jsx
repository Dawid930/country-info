import React from 'react'

function Modal({open, onClose, countryData}) {
    if(!open) return null
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
          <h1>{countryData.name.common}</h1>
          <h3>{countryData.population}</h3>
        </div>
      </div>
    </div>
  </div>
);
}

export default Modal