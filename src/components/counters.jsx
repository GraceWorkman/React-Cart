import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    
    render() { 
        const { counters, onReset, onDelete, onIncrement, onDecrement, } = this.props;

        return (
            <React.Fragment>
                { counters.map( counter => (
                    <Counter
                        key={ counter.id }
                        counter={ counter }
                        onIncrement={ onIncrement }
                        onDecrement={ onDecrement }
                        onDelete={ onDelete }
                    />
                ))}
                <button
                onClick={onReset}
                className="btn btn-primary btn-sm m-2">Reset</button>
            </React.Fragment>
        );
    }
}
 
export default Counters;