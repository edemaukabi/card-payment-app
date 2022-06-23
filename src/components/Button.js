import React from 'react'
import '../styles/Button.css'

export const Button = ({title, width, height}) => {
  return (
    <button className='button'style={{width, height}}>{title}</button>
  )
}
