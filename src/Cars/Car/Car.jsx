import React from 'react'
import classes from './Car.module.css'
import {withRouter} from'react-router-dom'
const Car=(props)=>{
  return(
    <div 
      className={classes.Car}
      onClick={()=>props.history.push("/cars/"+ props.name.toLowerCase())}
    >
     
      <h1>Car name: {props.name}</h1>
      <p>Year: {props.year}</p>
    </div>
  )
}
export default withRouter(Car); 