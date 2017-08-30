import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CityTime from './clock_header.js';
import ClockHeader from './heading.js';

let atm = new Date();
console.log(atm);
const hour = 60*1000;

let currentTime = atm.toLocaleTimeString();
let londonTime = new Date().toLocaleTimeString('en-GB', {timeZone: "Europe/London"});
;
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
      london: new Date().toLocaleTimeString('en-GB', {timeZone: "Europe/London"}), 
      paris: new Date().toLocaleTimeString('en-GB', {timeZone: "Europe/Paris"})
    });
  }
  render() {
    return (
    <div>
      <div><ClockHeader/></div>
     <CityTime currentTime={this.state.atlanta} city="Atlanta"/>
     <CityTime currentTime={this.state.newYork} city="New York"/>
     <CityTime currentTime={this.state.london} city="London"/>
     <CityTime currentTime={this.state.paris} city="Paris"/>
    </div>
    );
  }
}

// _changeNumber = () => {
//       setInterval(this.setState({
//         atlanta: currentTime,
//         newYork: currentTime,
//         london: londonTime, 
//         paris: parisTime
//       }));
//       // console.log(theNumber);
//     }


export default App;
