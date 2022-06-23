import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Payment } from './pages/Payment';
import './App.css'


const App = () => {
  return (
    <div className='App'>
      <Payment />
    </div>
  )
}

export default App