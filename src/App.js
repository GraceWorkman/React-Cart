import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';
import { render } from '@testing-library/react';

class App extends Component {

  state = {  
      counters: [
          {
              name: "Product 1",
              id: 1,
              value: 10,
              count: 0,
              description: "Item"
          },
          {
              name: "Product 2",
              id: 2,
              value: 20,
              count: 0,
              description: "Item"
          },
          {
              name: "Product 3",
              id: 3,
              value: 30,
              count: 0,
              description: "Item"
          }
      ]
  };

  constructor() {
    super();
    console.log("App - Constructor");
  }

  handleIncrement = counter => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counter};
      counters[index].count++;
      this.setState({ counters: counters });
  };

  handleDecrement =counter => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counter};
      if ( counters[index].count >0 ) counters[index].count--;
      this.setState({ counters: counters });
  };

  handleReset = () => {
      const counters = this.state.counters.map( c => { 
          c.count = 0;
          return c;
      });
      this.setState({ counters: counters });
  };

  handleDelete = ( counterId ) => {
      const counters = this.state.counters.filter( c => c.id !== counterId );
      this.setState({ counters: counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter( c => c.count > 0 ).length}/>
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        </main>
      </React.Fragment>  
    );
  }
}

export default App;