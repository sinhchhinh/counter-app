import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
        { id: 1, value: 0},
        { id: 2, value: 0},
        { id: 3, value: 0},
        { id: 4, value: 0},
        
    ]
  };

//Event handler for adding counter increment 
handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters});
}
  //Delete Counter even handler
  //Use th filter method to get all the counters except 
  //the on with the given iD
handleDelete = counterID => {
    const counters = this.state.counters.filter( c => c.id !== counterID);
    this.setState({counters : counters}) ///Now ovrrid th counter proprty 
};

handlReset = () => {
    const counters = this.state.counters.map (c => {
        c.value = 0;
        return c;
    });
    this.setState({counters});
};
  render() { 
    return ( 
      <React.Fragment>
      <NavBar totalCounters={this.state.counters.filter(c=> c.value > 0).length }/>
      <main className="container">
        
        <Counters 
          counters={this.state.counters}
          onReset={this.handlReset}
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
        />
      </main> 
      </React.Fragment> 
    );
  }
}
 

/*function App() {
  return (
    <NavBar/>
    <main className="container">

    </main>

  );
}*/



export default App;
