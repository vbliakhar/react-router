import React, { Component } from 'react'
import Car from './Car/Car'
class Cars extends Component{
  state={
    cars:[
      {name:"Ford", year: 2018},
      {name:"Audi", year: 2016},
      {name:"Mazda", year: 2010}
    ]
  }
  goToHomePage=()=>{
    this.props.history.push({
      pathname:'/'
    })
  }
  render(){
    console.log(this.props)
    return(
      <div style={{
        width: 400,
        margin: 'auto',
        padding: '20px',  
        textAlign:"center"
      }}>
        <button onClick={this.goToHomePage}>GoToHomePage</button>
        <hr/>
        {this.state.cars.map((car,index)=>{
          return(
            <Car
              key={index}
              name={car.name}
              year={car.year}
              // {...this.props}
            />
          )
        })}
      </div>
    )
  }
}
export default Cars;