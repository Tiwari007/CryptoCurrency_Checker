import React from 'react'
import classes from './Styles/CryptoCard.module.css'

const CryptoCard = ({data}) => {
  return (
    <div className={classes.card}>
      <h2>Details</h2>
      <p><span>BASE: </span>{data.base}</p>
      <p><span>CURRENCY: </span>{data.currency}</p>
      <p><span>AMOUNT: </span>{data.amount}</p>
    </div>
  )
}

export default CryptoCard