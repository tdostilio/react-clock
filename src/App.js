import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CityTime from './clock_header.js';
import Add_City from './add_button.js';


let atm = new Date();
let currentTime = atm.toLocaleTimeString();
let londonTime = new Date().toLocaleTimeString('en-GB', {timeZone: "Europe/London"});
let parisTime = new Date().toLocaleTimeString('en-GB', {timeZone: "Europe/Paris"});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      atlanta: currentTime,
      newYork: currentTime,
      london: londonTime, 
      paris: parisTime
    };
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  tick() {
    this.setState({
      atlanta: new Date().toLocaleTimeString(),
      newYork: new Date().toLocaleTimeString(),
      london: new Date().toLocaleTimeString('en-US', {timeZone: "Europe/London"}), 
      paris: new Date().toLocaleTimeString('en-US', {timeZone: "Europe/Paris"})
    });
  }
  render() {
    return (
    <div>
      <div>
      <CityTime currentTime={this.state.atlanta} city="Atlanta"/>
      </div>
      <div>
      <CityTime currentTime={this.state.newYork} city="New York"/>
      </div>
      <div>
      <CityTime currentTime={this.state.london} city="London"/>
      </div>
      <div>
      <CityTime currentTime={this.state.paris} city="Paris"/>
      </div>
      <Add_City/>    
    </div>
    )
  }
}

export default App;
