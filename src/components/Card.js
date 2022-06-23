import React from 'react'
import styles from '../styles/Card.css'
import { IoWifiOutline } from 'react-icons/io5'
export const Card = ({cardNumber, expiryDate, name, cardType}) => {
  return (
    <div className='card'>
      <p>CARD NUMBER</p>
      <p>{cardNumber}</p>
      <div>
        <IoWifiOutline className='card__chip-icon'/>
        <img src='/assets/chip.png' className='card__chip-image'/>
      </div>
      <p>EXPIRATION DATE</p>
      <p>{expiryDate}</p>
      <p>{name}</p>
      <div className='card__type'>
        <img src={cardType} className='card__typeImg'/>
      </div>
    </div>
  )
}
