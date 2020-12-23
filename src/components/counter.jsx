import React, { Component } from 'react';

class Counter extends Component {

	getBadgeClasses() {
        let classes = "badge m-2 p-2 badge-";
        classes += this.props.counter.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        let count = this.props.counter.count;
        return count === 0? 'Empty' : count;
    }

    renderDescription() {
        if ( !this.props.counter.description ) return <br></br>
        return <p>{ this.props.counter.description }</p>;
	}
	
    render() {

        return (
            <React.Fragment>
                <span className={ this.getBadgeClasses() }>{ this.formatCount() }</span>
                <button onClick={ () => this.props.onIncrement(this.props.counter) } className="btn btn-secondary btn-sm m-1">+</button>
				<button onClick={ () => this.props.onDecrement(this.props.counter) } className="btn btn-secondary btn-sm m-1 ">-</button>
				<button onClick={ () => this.props.onDelete(this.props.counter.id) } class="btn btn-danger btn-sm m-1">Delete</button>
                { this.renderDescription() }
            </React.Fragment>
        );
    }
}
 
export default Counter;