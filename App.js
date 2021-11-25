import logo from './logo.svg';
import './App.css';
import ReactSpeedometer from "react-d3-speedometer";
import {Route , BrowserRouter as Router , Switch , Link} from "react-router-dom";
import Temp from  "./Temp";
import Login from "./Login";
import React, { Component } from 'react';
import Config from './Config';
import Mini from './Mini';
import Minisecond from './Minisecond';
class App extends React.Component {
  constructor(props) {
    super(props);
    
  }
 
 
  render(){

 
  return (
    <div  className="container">    
    <Router>
   <Switch>
    <Route path = "/" exact component = {Login} />
    <Route path = "/dash" exact component = {Temp} />
    <Route path = "/config" exact component = {Config} />
    <Route path = "/dash1" exact component = {Mini} />
    <Route path = "/dash2" exact component = {Minisecond} />
    </Switch>
    </Router>
    </div>
  );
}
}

export default App;
