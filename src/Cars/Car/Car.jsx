import React from 'react'
import classes from './Car.module.css'
const Car=(props)=>{
  return(
    <div className={classes.Car}>
      <h1>Car name: {props.name}</h1>
      <p>Year: {props.year}</p>
    </div>
  )
}
export default Car;