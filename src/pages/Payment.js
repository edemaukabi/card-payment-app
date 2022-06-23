import React from 'react'
import { Navbar } from '../components/Navbar'
import CardForm from '../components/CardForm'
import { supportedCards, preferredCard, cartValues } from '../data'
import { Cart } from '../components/Cart'
import '../styles/Payment.css'

export const Payment = () => {
  return (
    <>
      <div className='payment__nav'>
        <Navbar headerItems={['Trips', 'Recently Viewed', 'Bookings']}/>
      </div>
      <div className='payment__body'>
        <CardForm cards={supportedCards} preferredCard={preferredCard}/>
        <Cart cartValues={cartValues}/>
      </div>
    </>
  )
}
