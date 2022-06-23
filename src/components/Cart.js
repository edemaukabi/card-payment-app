import React from 'react'
import { Button } from './Button'
import '../styles/Cart.css'

export const Cart = ({cartValues}) => {
   const { total, tax, promo, promoCode } = cartValues;
  return (
    <div className='cart'>
        <p className='cart__param'>
            <span>Subtotal</span>
            <span>N{total}</span>
        </p>
        <p className='cart__param'>
            <span>Estimated TAX</span>
            <span>N{tax}</span>
        </p>
        <p className='cart__param'>
            <span>Promotional code:{promoCode}</span>
            <span>N-{promo}</span>
        </p>
        <hr />
        <div className='cart__footer'>
            <Button title={"Complete payment"} width={"200px"} height={"40px"}/>
            <span className='cart__footer__total'>Total: N{total+tax-promo}</span>
        </div>
    </div>
  )
}
