import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {  
        counters: [
            {
                name: "Product 1",
                id: 1,
                value: 10,
                count: 1,
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
                { this.state.counters.map( counter => (
                    <Counter
                        key={ counter.id }
                        counter={ counter }
                        onIncrement={ this.handleIncrement }
                        onDecrement={ this.handleDecrement }
                        onDelete={ this.handleDelete }
                    />
                ))}
                <button
                onClick={this.handleReset}
                className="btn btn-primary btn-sm m-2">Reset</button>
            </React.Fragment>
        );
    }
}
 
export default Counters;