import React, { Component } from 'react';
import './App.scss';
import About from './About/About'
import Cars from './Cars/Cars'
import {Route, NavLink, Switch} from 'react-router-dom'
import CarDetail from './CarDetail/CarDetail'
class App extends Component {
  state={
    isloginIn:false
  }
  render(){
    return(
      <div>
        <nav className="nav">
          <ul>
            <li>
              <NavLink 
                to="/" 
                exact
                activeClassName={'new-active'}>Home</NavLink>
            </li>
            <li><NavLink 
            to={{
              pathname:"/about",
              search:"?a=1&b=2",
              hash: "wfm-hash"
            }}
            activeStyle={{color:"blue"}}
            >About</NavLink></li>
            <li><NavLink to="/cars">Cars</NavLink></li>
          </ul>
          <hr/>
          <div style={{textAlign:"center"}}>
            <p>login = {this.state.isloginIn?"TRUE":"FAlse"}</p>
            <button
              style={{textAlign:"center"}}
              onClick={()=>this.setState({isloginIn:!this.state.isloginIn})}
            > Login</button>
          </div>
          
        </nav>

        <hr/>
        <Switch>
          <Route path='/' exact render={()=><h1>Home Page</h1>} />
          {this.state.isloginIn?<Route path='/about' component={About} />:null}
          
          <Route path='/cars/:name' exact component={CarDetail}/>
          <Route path='/cars' component={Cars} />
          <Route render={()=><h1>404 not found</h1>}/>
        </Switch>
      </div>
    )
  }
}

export default App;
