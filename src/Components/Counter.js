import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../Actions';

class Counter extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.decr}>-</button>
                <span> Contador: {this.props.number} </span>
                <button onClick={this.props.incr}>+</button>
            </div>
        );
    }
};

const mapStateToProps = state => ({
    number: state.counter.number
});


export default connect(mapStateToProps, actions)(Counter);